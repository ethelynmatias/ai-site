export default function Contact({ contacts }) {
    console.log(contacts);
    return(
        <>
            <section id="home">
                <div className="gap-18 md:pt-45 lg:gap-35 lg:pt-5.5 flex h-full flex-col justify-between  ">
                    <div className="flex-col items-left gap-6 justify-self-center px-4 text-left sm:px-6 lg:px-8">

                        {contacts.map(contact => (
                            <div key={contact.id} className="border-b">
                                <p>{contact.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
