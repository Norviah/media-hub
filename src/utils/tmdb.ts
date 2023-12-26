const BASE_IMAGE_URL: string = `https://image.tmdb.org/t/p/original/`;

export function imageUrl({ path, alt }: { path: string | undefined; alt: string }): string {
  return path ? `${BASE_IMAGE_URL}${path}` : placeholderImage(alt);
}

export function placeholderImage(str: string): string {
  return `https://placehold.co/400x600/EEE/31343C?font=montserrat&text=${encodeURI(str)}`;
}
