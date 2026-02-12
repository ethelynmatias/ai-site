import { useForm } from "@inertiajs/react";
import { useRoute } from '../../../../vendor/tightenco/ziggy';

export default function Show({ contact }) {

    const route = useRoute()
    const { delete : destroy } = useForm();

    function submit(e) {
        e.preventDefault()
        //destroy(`/contacts/${contact.id}`)
        destroy(route('contacts.destroy', contact))
    }

    return (
        <>
             <section id="home">
                <div className="gap-18 md:pt-45 lg:gap-35 lg:pt-5.5 flex h-full flex-col justify-between">
                    <div className="flex-col items-left gap-6 justify-self-center px-4 text-left sm:px-6 lg:px-8">
                        <h1 className="title">{contact.name}</h1>
                         <div className="flex items-center justify-end gap-2">
                            <form onSubmit={submit}>
                                <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
