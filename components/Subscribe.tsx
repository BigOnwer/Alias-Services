import imageCorporation from '@/assets/Image-Coperation.png'
import Image from 'next/image'

export function Subscribe() {
    return(
        <section className="p-10 flex justify-between">
            <div className='w-1/2'>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Subscribe Now<br /><p className='text-blue-800'>and receive the benefits</p></h1>
            <p className="text-gray-600 mb-6">
            Alias ​​Service offers customer support automation via WhatsApp and websites, as well as custom website creation. Our mission is to optimize the service and online presence of companies, ensuring agile and effective communication.
            </p>
            <form className="flex flex-col">
                <input type="text" placeholder="Name" className="p-2 mb-2 border rounded w-full" required/>
                <input type="email" placeholder="Email" className="p-2 mb-4 border rounded w-full" required/>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700 transition duration-300">Subscribe</button>
            </form>
            </div>
            <div>
                <Image src={imageCorporation} alt='pessoas construindo um quebra cabeca fundo com formato irrelugar azul' width={400}/>
            </div>
        </section>
    )
}