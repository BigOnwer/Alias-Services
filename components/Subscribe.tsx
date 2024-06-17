import imageCorporation from '@/assets/Image-Coperation.png'
import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Subscribe() {
    return(
        <section className="p-4 md:p-10 flex flex-col md:flex-row justify-between">
            <div className='w-full md:w-1/2'>
                <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Subscribe Now<br /><p className='text-blue-900 dark:text-blue-400'>and receive the benefits</p></h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Alias ​​Service offers customer support automation via WhatsApp and websites, as well as custom website creation. Our mission is to optimize the service and online presence of companies, ensuring agile and effective communication.
                </p>
                <form className="flex flex-col space-y-5">
                    <Input type="text" placeholder="Name" className="w-full dark:border-white focus:border-none" required />
                    <Input type="email" placeholder="Email" className="w-full dark:border-white focus:border-none" required />
                    <Button type="submit" className="w-full">Subscribe</Button>
                </form>
            </div>
            <div className='mt-6 md:mt-0 flex justify-center md:justify-end'>
                <Image src={imageCorporation} alt='pessoas construindo um quebra cabeca fundo com formato irregular azul' width={400} />
            </div>
        </section>
    )
}
