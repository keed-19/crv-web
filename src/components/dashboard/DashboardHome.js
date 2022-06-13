
import React from "react";
import Header from '../Header';

const DashboardHome = () => {
    return (

        <section>
            <Header />
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold text-gray-900'>Dashboard Home componente</h1>
            </div>
        </section>
    );
}

export { DashboardHome as default };