import Image from 'next/image'
import Link from '@/components/Link'

export default function BuyMeACoffee() {
  return (
    <Link href="https://www.buymeacoffee.com/PeterYuanAI" passHref>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=PeterYuanAI&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          width={180} // Adjust the width as needed
          height={60} // Adjust the height as needed
          unoptimized // Optional, depending on your Next.js image optimization settings
        />
      </a>
    </Link>
  )
}
