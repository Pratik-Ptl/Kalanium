export default function Divider({ subtle = false }: { subtle?: boolean }) {
  return (
    <div
      className="divider"
      style={
        subtle
          ? { background: "linear-gradient(to right, transparent, rgba(196,113,74,0.15), transparent)" }
          : undefined
      }
    />
  );
}
