import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Briefcase, MapPin, DollarSign } from 'lucide-react';

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector((store) => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/jobs');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Post Your Dream Job</h1>
                    <p className="mt-3 text-lg">
                        Empower your hiring process. Attract top talent and grow your team.
                    </p>
                </div>
            </div>
            {/* Form Section */}
            <div className="flex items-center justify-center w-screen my-10">
                <form
                    onSubmit={submitHandler}
                    className="p-8 max-w-4xl w-full bg-white shadow-lg rounded-lg border border-gray-200"
                >
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Post a New Job</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., Software Engineer"
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="Brief description of the job"
                            />
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="Required skills, education, etc."
                            />
                        </div>
                        <div>
                            <Label>
                                <DollarSign className="inline-block w-4 h-4 mr-2" />
                                Salary
                            </Label>
                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., $70,000"
                            />
                        </div>
                        <div>
                            <Label>
                                <MapPin className="inline-block w-4 h-4 mr-2" />
                                Location
                            </Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., New York"
                            />
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., Full-Time"
                            />
                        </div>
                        <div>
                            <Label>Experience Level</Label>
                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., 2+ years"
                            />
                        </div>
                        <div>
                            <Label>No of Positions</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-lg"
                                placeholder="e.g., 3"
                            />
                        </div>
                        {companies.length > 0 && (
                            <div>
                                <Label>Company</Label>
                                <Select onValueChange={selectChangeHandler}>
                                    <SelectTrigger className="w-full my-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {companies.map((company) => (
                                                <SelectItem
                                                    value={company?.name?.toLowerCase()}
                                                    key={company._id}
                                                >
                                                    {company.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    </div>
                    {loading ? (
                        <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                        >
                            Post New Job
                        </Button>
                    )}
                    {companies.length === 0 && (
                        <p className="text-xs text-red-600 font-semibold text-center my-4">
                            *Please register a company first before posting a job
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PostJob;
