import { useForm } from "@inertiajs/react";

export default function Subscribe() {

    const { data, setData, post, errors, processing } = useForm({
        first_name:"",
        last_name:"",
        email:"",
    })

    function submit(e) {
        e.preventDefault()
        post("/subscriptions");
    }

    console.log(useForm());
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
                                name="first_name"
                                placeholder="First Name"
                                value={data.first_name}
                                onChange={(e) => setData("first_name", e.target.value)}
                                className={`border border-gray-300 rounded px-4 py-2 ${errors.first_name ? '!ring-red-500' : ''}`}
                                required
                            />

                            {errors.first_name && <p className="error">{errors.first_name}</p>}

                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={data.last_name}
                                onChange={(e) => setData("last_name", e.target.value)}
                                className={`border border-gray-300 rounded px-4 py-2 ${errors.last_name ? '!ring-red-500' : ''}`}
                                required
                            />

                            {errors.last_name && <p className="error">{errors.last_name}</p>}

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

                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={processing}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
