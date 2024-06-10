import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";

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
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // TODO: Handle form submission
    alert("We are working on this feature. Please check back later.");
    // Reset form after submission if needed
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Interested to work together? Let's talk
        </p>
      </div>
      <form className="mx-auto w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
        <Input className="max-w-lg flex-1" placeholder="Name" type="text"
               onChange={handleChange} name="name" value={formData.name}
               required={true} />
        <Input className="max-w-lg flex-1" placeholder="Email" type="email"
               onChange={handleChange} name="email" value={formData.email}
               required={true} />
        <Input className="max-w-lg flex-1" placeholder="Subject" type="text"
               onChange={handleChange} name="subject" value={formData.subject}
               required={true} />
        <Textarea className="max-w-lg flex-1" placeholder="Message"
                  onChange={handleChange} name="message" value={formData.message}
                  required={true}/>
        <Button type="submit">
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default Contact;