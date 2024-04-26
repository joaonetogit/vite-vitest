export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {}

export default function Button(props: IButtonProps) {
  const { children, ...rest } = props;

  return (
    <button data-testid="button-test" {...rest}>
      {children}
    </button>
  );
}
