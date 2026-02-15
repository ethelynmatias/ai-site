import { useForm } from "@inertiajs/react";
import { useRoute } from '../../../../vendor/tightenco/ziggy';

export default function Subscribe({ contact }) {
    const route = useRoute()

    const { data, setData, put, errors, processing } = useForm({
        name:contact.name,
        phone:contact.phone,
        email:contact.email,
        body:contact.body
    })

    function submit(e) {
        e.preventDefault()
        //put(`/contacts/${contact.id}`);

        put(route('contacts.update', contact));
    }

    //console.log(useForm());
    return(
        <>
         <section id="home">
            <div className="gap-18 md:pt-45 lg:gap-35 lg:pt-5.5 flex h-full flex-col justify-between  ">
                <div className="flex-col items-left gap-6 justify-self-center px-4 text-left sm:px-6 lg:px-8">
                    <h1 className="title">Unlock Premium Access & Transform Your Experience</h1>

                    <div>
                        <form onSubmit={submit}>

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className={`border border-gray-300 rounded px-4 py-2 ${errors.name ? '!ring-red-500' : ''}`}
                                required
                            />

                            {errors.name && <p className="error">{errors.name}</p>}

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={data.phone}
                                onChange={(e) => setData("phone", e.target.value)}
                                className={`border border-gray-300 rounded px-4 py-2 ${errors.phone ? '!ring-red-500' : ''}`}
                                required
                            />

                            {errors.phone && <p className="error">{errors.phone}</p>}

                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                onChange={(e) => setData("email", e.target.value)}
                                className={`border border-gray-300 rounded px-4 py-2 ${errors.email ? '!ring-red-500' : ''}`}
                                required
                            />

                            {errors.email && <p className="error">{errors.email}</p>}

                            <textarea  name="body"
                             className={`border border-gray-300 rounded px-4 py-2 ${errors.body ? '!ring-red-500' : ''}`}
                             onChange={(e) => setData("body", e.target.value)}
                            >
                            {data.body}
                            </textarea>

                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={processing}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
