import './services.scss'


const navItems = [
    {
        id: 1,
        text: 'We will design your home personally for you, combining ergonomics and beauty, guided by a designer’s vision of space.',
        title: 'Architectural Design'
    },
    {
        id: 2,
        text: 'Cпроектуємо ексклюзивний дизайн інтер\'єру з урахуванням ваших побажань і наших завдань.',
        title: 'Interior Design'
    },
    {
        id: 3,
        text: 'We oversee the implementation of our projects from concept to realization',
        title: 'Architectural supervision'
    },
    {
        id: 4,
        text: 'We handle everything from concept development to project completion, so you don’t have to worry about a thing.',
        title: 'Turnkey Projects'
    }
];

const Services = () => {
    return (

        <section className="services section-box">

            <div className="container">

                <h2 className="services__title section__title">
                    Our Services
                </h2>

                <ul className="services__list">
                    {navItems.map((item) => (
                        <li key={item.id} className="services__item">
                            <p className="services__item-title">{item.title}</p>
                            <p className="services__item-text">{item.text}</p>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}

export default Services;