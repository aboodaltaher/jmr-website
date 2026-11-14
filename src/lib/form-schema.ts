// Client-side form validation: a tiny validator (about 1 KB) in place of full zod (~65 KB
// gzipped), which would otherwise ship in every page's JavaScript. The rules and messages are
// exactly the ones the forms used before; the server actions in src/app/actions.ts still
// validate every submission again with full zod, so nothing is trusted from the browser.
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";

/** A rule returns an error message, or null when the value is fine. */
export type Rule = (value: unknown) => string | null;
export type Schema = Record<string, Rule>;
/** Form values: every field is a string (optional fields may be missing). */
export type FormOf<S extends Schema> = { [K in keyof S]: string };

export const defineSchema = <S extends Schema>(schema: S): S => schema;

/** Non-empty string. */
export const required =
  (message: string): Rule =>
  (v) =>
    typeof v === "string" && v.length >= 1 ? null : message;

/** Optional free text. */
export const optionalText = (): Rule => () => null;

// Same pattern zod uses for z.email().
const EMAIL = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;

/** Optional email: empty, or a valid address. */
export const optionalEmail =
  (message: string): Rule =>
  (v) =>
    v === undefined || v === "" || (typeof v === "string" && EMAIL.test(v)) ? null : message;

/** Custom check on a string value. */
export const check =
  (test: (value: string) => boolean, message: string): Rule =>
  (v) =>
    typeof v === "string" && test(v) ? null : message;

/** Run rules in order; the first failure wins. */
export const all =
  (...rules: Rule[]): Rule =>
  (v) => {
    for (const r of rules) {
      const m = r(v);
      if (m) return m;
    }
    return null;
  };

/** react-hook-form resolver for a schema. */
export function resolver<S extends Schema>(schema: S): Resolver<FormOf<S> & FieldValues> {
  return async (values) => {
    const errors: Record<string, { type: string; message: string }> = {};
    for (const key of Object.keys(schema)) {
      const message = schema[key]((values as Record<string, unknown>)[key]);
      if (message) errors[key] = { type: "validate", message };
    }
    return Object.keys(errors).length
      ? { values: {}, errors: errors as FieldErrors<FormOf<S> & FieldValues> }
      : { values: values as FormOf<S> & FieldValues, errors: {} };
  };
}
