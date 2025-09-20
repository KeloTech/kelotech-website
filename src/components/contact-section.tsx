import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS configuration from config file

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    console.log('🚀 Starting email send process...');
    console.log('📧 EmailJS Config:', {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? 'SET' : 'NOT SET',
      TO_EMAIL: EMAILJS_CONFIG.TO_EMAIL
    });
    console.log('📝 Form data:', formData);

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        console.error('❌ EmailJS not configured. Please update src/config/emailjs.ts with your actual credentials.');
        setStatus('error');
        return;
      }

      console.log('✅ EmailJS config looks good, attempting to send...');

      // Initialize EmailJS if not already done
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('🔑 EmailJS initialized with public key');

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        }
      );

      console.log('✅ Email sent successfully!', result);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error('❌ Failed to send email. Full error:', error);
      console.error('❌ Error message:', error?.message);
      console.error('❌ Error status:', error?.status);
      console.error('❌ Error text:', error?.text);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <ContactCard
          title="Get in Touch"
          description="Have questions about our apps or need support? We'd love to hear from you. Fill out the form and we'll get back to you within 1 business day."
          className="bg-gray-900 border-gray-800 text-white"
          formSectionClassName="bg-gray-800/50"
          contactInfo={[
            {
              icon: MailIcon,
              label: 'Email',
              value: 'kelotechfi@gmail.com',
            },
            {
              icon: PhoneIcon,
              label: 'Phone',
              value: '+358 44 358 1828',
            },
            {
              icon: MapPinIcon,
              label: 'Location',
              value: 'Espoo, Finland',
              className: 'col-span-2',
            }
          ]}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-white">Name *</Label>
              <Input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white">Email *</Label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white">Phone</Label>
              <Input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+358 44 358 1828"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-white">Message *</Label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project or how we can help..."
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px]"
                required
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-green-900/50 border border-green-700 rounded-md">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-900/50 border border-red-700 rounded-md">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300">Failed to send message. Please try again or contact us directly.</span>
              </div>
            )}

            <Button 
              className="w-full bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
};

export default ContactSection;
