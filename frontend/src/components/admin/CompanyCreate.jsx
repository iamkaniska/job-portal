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
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto p-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-semibold text-gray-800 tracking-tight">Create Your Company</h1>
                    <p className="text-lg text-gray-600 mt-3">Enter the name of your company. You can always update it later.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl space-y-6">
                    <div className="mb-6">
                        <Label className="text-lg text-gray-700">Company Name</Label>
                        <Input
                            type="text"
                            className="mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                            placeholder="e.g., JobHunt, Microsoft"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => navigate("/admin/companies")}
                            className="py-2 px-6 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={registerNewCompany}
                            className="py-2 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 ease-in-out"
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyCreate;
