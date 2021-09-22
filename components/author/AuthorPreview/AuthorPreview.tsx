import { AuthorDTO } from "@api";
import { LazyImage } from "@components/ui";
import css from "./AuthorPreview.module.css";
import cn from "classnames";

export const AuthorPreview = ({
  author,
  isInverted,
}: {
  author: AuthorDTO;
  isInverted: boolean;
}) => {
  return (
    <div
      className={cn({
        [css.author]: true,
        [css.inverted]: isInverted,
      })}
    >
      <figure className={css.img}>
        <LazyImage
          src={`/img/avatars/${author.image}`}
          width={30}
          height={30}
          alt={author.username}
        />
      </figure>
      <span className={css.by}>BY&nbsp;</span>
      <p className={css.name}>{author.username}</p>
    </div>
  );
};
