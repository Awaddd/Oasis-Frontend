import type { SocialLink } from "../utils/types/global"

const SocialIconBar = ({ links, email, dark }: { links?: SocialLink[]; email?: string; dark?: boolean }) => {
  if (!links) return null

  const classes = "w-5 h-5 fill-current"
  const variant = dark ? "text-gray-900 hover:text-gray-700" : "text-gray-400 hover:text-gray-200"

  return (
    <>
      {links.map((link, key) => (
        <a
          className="mr-[14px] outline-none"
          href={link?.link}
          aria-label={link?.brand}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          {link?.brand.toLowerCase() === "linkedin" && (
            <svg className={`${classes} ${variant}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
            </svg>
          )}

          {link?.brand.toLowerCase() === "twitter" && (
            <svg className={`${classes} ${variant}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
            </svg>
          )}

          {link?.brand.toLowerCase() === "facebook" && (
            <svg className={`${classes} ${variant}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
            </svg>
          )}
        </a>
      ))}

      {email && (
        <a className="outline-none" href={`mailto:${email}`} aria-label="Email">
          <svg
            className={`${classes} ${variant}`}
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z"
              id="email"
            />
          </svg>
        </a>
      )}
    </>
  )
}

export default SocialIconBar
