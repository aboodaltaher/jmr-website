import { ArabicChrome } from "@/components/ArabicChrome";

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ArabicChrome>{children}</ArabicChrome>;
}
