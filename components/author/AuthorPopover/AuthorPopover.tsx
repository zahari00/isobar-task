import { AuthorDTO } from "@api";
import { Portal } from "@components/common";
import { LazyImage } from "@components/ui";
import css from "./AuthorPopover.module.css";

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
              <p className={css.name}>
                {author.username}
                <span className={css.score}>
                  <LazyImage
                    alt={author.username}
                    src={`/img/icons/yellow-stars.svg`}
                    width={16}
                    height={16}
                  />
                  &nbsp;
                  {author.score}
                </span>
              </p>
              <p className={css.joinedAt}>Joined: {author.joinedAt}</p>
              <div
                className={css.about}
                dangerouslySetInnerHTML={{
                  __html: author.about || "No about information",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
