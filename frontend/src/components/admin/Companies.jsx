import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto my-10 p-5">
                {/* Tagline Section */}
                <div className="text-center my-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-wide">
                        Connecting Talent, <span className="text-gray-800">Powering Success!</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg">
                        Discover top companies and grow with the best opportunities.
                    </p>
                </div>
                {/* Filter and Button Section */}
                <div className="flex items-center justify-between mb-6 bg-white shadow-md rounded-lg p-5">
                    <Input
                        className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={() => navigate("/admin/companies/create")}
                        className="ml-5 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                    >
                        New Company
                    </Button>
                </div>
                {/* Companies Table */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <CompaniesTable />
                </div>
            </div>
        </div>
    );
};

export default Companies;
