import Image, { ImageProps } from "next/image";

export const LazyImage = ({
  loading = "lazy",
  layout = "fill",
  alt,
  quality = 90,
  ...rest
}: ImageProps) => {
  return <Image alt={alt} loading={loading} quality={quality} {...rest} />;
};