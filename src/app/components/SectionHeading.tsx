type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
