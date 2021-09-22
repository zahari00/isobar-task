import Image, { ImageProps } from "next/image";

export const LazyImage = ({
  loading = "lazy",
  layout = "fill",
  alt,
  ...rest
}: ImageProps) => {
  return (
    <Image
      alt={alt}
      loading={loading}
      {...rest}
    />
  );
};