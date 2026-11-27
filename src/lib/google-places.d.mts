export function placeIdFromReviewLink(link: string | undefined): string | null;
export function fetchPlaceReviewStats(
  placeId: string,
  apiKey: string,
  options?: { timeoutMs?: number },
): Promise<{ rating: number; count: number }>;
export function isPlausible(
  next: { rating: number; count: number } | null | undefined,
  current: { count: number },
): boolean;
export function roundRating(rating: number): number;
