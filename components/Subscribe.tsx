'use client' 

import imageCorporation from '@/assets/Image-Coperation.png';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Subscribe() {


  return (
    <section className="p-4 md:p-10 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
          Subscribe Now<br />
          <p className="text-blue-900 dark:text-blue-400">and receive the benefits</p>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Alias ​​Service offers automated customer support via WhatsApp, as well as a business analytics system. Our mission is to optimize customer service and the online presence of companies, ensuring agile and effective communication.
        </p>
        <form action="https://api.staticforms.xyz/submit" method='post' className="flex flex-col space-y-5">
            <Input
                type="email"
                name='$Email'
                placeholder="Email"
                className="w-full dark:border-white focus:border-none"
                required
            />
            <Textarea
                placeholder="Message"
                name='$Mensagem'
                className="w-full dark:border-white focus:border-none"
                required
            />
            <Button type="submit" className="w-full">
                Send
            </Button>

            <input type="hidden" name="accessKey" value="1400271a-fd5d-49ce-8310-3b88e491258c"/>
            <input type="hidden" name="redirectTo" value="https://alias-services.vercel.app/"/>
        </form>
      </div>
      <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
        <Image src={imageCorporation} alt="pessoas construindo um quebra cabeca fundo com formato irregular azul" width={500} height={500} />
      </div>
    </section>
  );
}
