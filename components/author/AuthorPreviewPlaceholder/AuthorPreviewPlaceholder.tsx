import css from "./AuthorPreviewPlaceholder.module.css";

export const AuthorPreviewPlaceholder = () => {
  return (
    <div className={css.con}>
      <div className={css.img} />
      <div className={css.text} />
    </div>
  );
}
