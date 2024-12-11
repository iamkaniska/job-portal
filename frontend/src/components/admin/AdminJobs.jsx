import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-10 max-w-lg w-full">
                    <h1 className="text-3xl font-extrabold text-gray-800 text-center">Create Your Company</h1>
                    <p className="text-center text-gray-600 mt-2 mb-8">
                        Enter your company details below to get started.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <Label className="text-sm font-medium text-gray-700">Company Name</Label>
                            <Input
                                type="text"
                                className="mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200 hover:shadow-lg"
                                placeholder="e.g., JobHunt, Microsoft"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                onClick={() => navigate("/admin/companies")}
                                className="py-2 px-6 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition duration-200"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={registerNewCompany}
                                className="py-2 px-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 hover:scale-105 transition duration-300 shadow-lg"
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
