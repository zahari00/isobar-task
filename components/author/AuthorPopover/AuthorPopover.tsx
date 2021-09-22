import { Portal } from "@components/common";
import { AuthorDTO } from "@api";
import css from "./AuthorPopover.module.css";
import { LazyImage } from "@components";

export const AuthorPopover = ({
  author,
  top,
  left,
}: {
  author: AuthorDTO;
  top: number;
  left: number;
}) => {
  return (
    <Portal>
      <div
        className={css.popover}
        style={{
          transform: `translate(${left}px, ${top}px)`,
        }}
      >
        <div className={css.wrapper}>
          <div className={css.content}>
            <div className={css.img}>
              <LazyImage
                src={`/img/avatars/${author.image}`}
                width={80}
                height={80}
                alt={author.username}
              />
            </div>
            <div className={css.right}>
              <p className={css.name}>{author.username}</p>
              {author.about && (
                <div className={css.about} dangerouslySetInnerHTML={{ __html: author.about }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
