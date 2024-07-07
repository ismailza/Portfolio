import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon
} from "lucide-react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  /**
   * Handle input change
   * @param e - event object
   */
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submission
   * @param e - event object
   */
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Send form data to the server
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Handle success
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      // Handle error
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <ToastContainer position="top-center" autoClose={5000} />
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p
          className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Interested to work together? Let's talk
        </p>
      </div>
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-4">
          <p className="text-start text-gray-500 dark:text-gray-400">
            I'm available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey,
            then get in touch.
          </p>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-gray-500 dark:text-gray-400"/>
              <p
                className="text-sm text-gray-500  hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                Sale, Rabat-Sale-Kenitra, Morocco
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400"/>
              <a href="tel:212635791476"
                 className="text-sm text-gray-500  hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                +212 635-791476
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6 text-gray-500 dark:text-gray-400"/>
              <a href="mailto:ismailza407@gmail.com"
                 className="text-sm text-gray-500  hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                ismailza407@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center space-x-2">
                <Link href={"https://github.com/ismailza"} target={"_blank"} title={"GitHub"}>
                  <img src={"/logos/github.gif"} alt={"GitHub"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://linkedin.com/in/ismailzahir01"} target={"_blank"} title={"LinkedIN"}>
                  <img src={"/logos/linkedin.gif"} alt={"LinkedIn"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://instagram.com/ismailzahir01"} target={"_blank"} title={"Instagram"}>
                  <img src={"/logos/instagram.gif"} alt={"Instagram"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://facebook.com/ismailzahir01"} target={"_blank"} title={"Facebook"}>
                  <img src={"/logos/facebook.gif"} alt={"Facebook"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://x.com/ismailzahir01"} target={"_blank"} title={"X"}>
                  <img src={"/logos/x.png"} alt={"X"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://youtube.com/ismailzahir01"} target={"_blank"} title={"YouTube"}>
                  <img src={"/logos/youtube.gif"} alt={"YouTube"} width={"32px"} height={"32px"}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <form className="mx-auto w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Input className="flex-1 mb-2 md:mb-0" placeholder="Name" type="text"
                     onChange={handleChange} name="name" value={formData.name}
                     required={true}/>
              <Input className="flex-1" placeholder="Email" type="email"
                     onChange={handleChange} name="email" value={formData.email}
                     required={true}/>
            </div>
            <Input className="max-w-lg flex-1" placeholder="Subject" type="text"
                   onChange={handleChange} name="subject" value={formData.subject}
                   required={true}/>
            <Textarea className="max-w-lg flex-1" placeholder="Message"
                      onChange={handleChange} name="message" value={formData.message}
                      required={true}/>
            <Button type="submit" className={"w-full"}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;