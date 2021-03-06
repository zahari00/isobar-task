import { useCallback, useRef, useState } from "react";
import { AuthorDTO } from "@api";
import { AuthorPopover } from "../AuthorPopover";
import { AuthorPreviewPlaceholder } from "../AuthorPreviewPlaceholder";
import { LazyImage } from "@components/ui";
import { getElementOffset } from "@utils";
import css from "./AuthorPreview.module.css";
import cn from "classnames";

export const AuthorPreview = ({
  author,
  isInverted = false,
}: {
  author: AuthorDTO;
  isInverted?: boolean;
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const timeoutRef = useRef<number | undefined>();

  /**
   * Debounce to prevent unwanted popover to open
   */
  const handleMouseEnter = useCallback(() => {
    timeoutRef.current = setTimeout(
      () => setShowPopover(true),
      300
    ) as unknown as number;
  }, []);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setShowPopover(false);
  }, []);

  if (author.isLoading) return <AuthorPreviewPlaceholder />;

  return (
    <div
      ref={containerRef}
      className={cn({
        [css.author]: true,
        [css.inverted]: isInverted,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className={css.img}>
        <LazyImage
          src={`/img/avatars/${author.image}`}
          width={26}
          height={26}
          alt={author.username}
        />
      </figure>
      <span className={css.text}>BY&nbsp;</span>
      <p className={css.name}>{author.username}</p>
      {containerRef.current && showPopover && (
        <AuthorPopover
          author={author}
          {...getElementOffset(containerRef.current)}
        />
      )}
      <span className={css.text}>&nbsp;({author.score})</span>
    </div>
  );
};
