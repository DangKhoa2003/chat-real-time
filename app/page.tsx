import Image from 'next/image';
import Link from 'next/link';

import { ModeToggle } from '@/components/theme-toggle';

import photos from '@/photos';
export default function Home() {
      return (
            <>
                  <ModeToggle />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10">
                        {photos.map(({ id, imageSrc }) => (
                              <Link key={id} href={`/photo/${id}`}>
                                    <Image
                                          alt=""
                                          src={imageSrc}
                                          height={500}
                                          width={500}
                                          className="w-full object-cover aspect-square"
                                    />
                              </Link>
                        ))}
                  </div>
            </>
      );
}
