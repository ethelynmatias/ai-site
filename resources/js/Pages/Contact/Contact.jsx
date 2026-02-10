import { Link } from "@inertiajs/react"

export default function Contact({ contacts }) {
    console.log(contacts);
    return(
        <>
            <section id="home">
                <div className="gap-18 md:pt-45 lg:gap-35 lg:pt-5.5 flex h-full flex-col justify-between  ">
                    <div className="flex-col items-left gap-6 justify-self-center px-4 text-left sm:px-6 lg:px-8">

                        {contacts.data.map(contact => (
                            <div key={contact.id} className="p-4 border-b">
                                <div>
                                    <span>Created on: </span>
                                     <span>
                                        {contact.created_at
                                        ? new Date(contact.created_at).toLocaleDateString()
                                        : 'N/A'}
                                    </span>
                                </div>
                                <p className="font-medium">{contact.name}</p>
                            </div>
                        ))}
                        <div className="flex gap-2 mt-6">
                            {contacts.links?.map(link => (
                                link.url ? ( // only render if URL exists
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={`px-3 py-1 border rounded ${
                                    link.active ? 'bg-blue-500 text-white' : 'text-gray-700'
                                    }`}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                </Link>
                                ) : (
                                <span
                                    key={link.label}
                                    className="px-3 py-1 border rounded text-gray-400 cursor-not-allowed"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                                )
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
