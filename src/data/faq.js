/**
 * Every answer leads with the direct answer and is written to stand alone, because
 * search and AI engines lift single passages. Facts come from the owner, the terms of
 * service or the Google listing. Do not add a claim here that has no source.
 */
export const faqPricing = [
  { q: 'How much does a car wash cost at The Car Bath?', a: 'An Essential Wash costs R180. It covers an exterior wash and dry, tyre shine, window cleaning, an interior vacuum and a wipe of the dashboard and surfaces.' },
  { q: 'How much does car detailing cost in Cape Town at The Car Bath?', a: 'The Executive Detail costs R1500, the same for cars, bakkies and SUVs. It includes a full interior and exterior deep clean, clay bar treatment and polish, leather and fabric conditioning, and engine bay detailing.' },
  { q: 'What is the difference between a valet and a detail?', a: 'A valet cleans the car, and a detail restores it. Our Signature Valet (R450) is a complete clean with an engine bay clean and upholstery spot clean. Our Executive Detail (R1500) adds a deep clean, clay bar treatment, polish and leather and fabric conditioning.' },
  { q: 'Do your prices include VAT?', a: 'Yes, all prices include VAT where applicable. Extra charges may apply for added services, difficult conditions or travel outside our standard service area.' },
  { q: 'Do bakkies and SUVs cost more?', a: 'No. Cars, bakkies and SUVs all pay the same price, for every service. Mobile and on-site bookings cost the same too.' },
  { q: 'How do I pay?', a: 'Payment is due when the service is finished. We accept cash, card and electronic transfer. Corporate accounts may qualify for credit terms, subject to approval.' },
]

export const faqService = [
  { q: 'What is the difference between mobile and on site?', a: 'Mobile means we come to your home or office at a time you book. On site means we are already at your business park or apartment block on its set day each week. The services and prices are the same, so choose whichever suits you.' },
  { q: 'Do you come to my home or office?', a: 'Yes. Our mobile service comes to your home or office in Cape Town, and you do not need to move your car.' },
  { q: 'Which areas of Cape Town do you cover?', a: 'Our standard service radius is 15km from Arden Grove in Milnerton. We also work in Woodstock and Frere Estate, and further areas may be possible with a travel charge.' },
  { q: 'Can I bring my car to you instead?', a: 'Yes, by appointment. You can drop your car at our bay at 27 Honeyside Rd W, Frere Estate, Cape Town. Book first, because we do not take walk-ins.' },
  { q: 'What are your opening hours?', a: 'We work by appointment only. Book online, phone 068 507 0088 or send a WhatsApp, and we will agree a time that suits you.' },
  { q: 'Do you need my water or electricity?', a: 'No water is needed, because we bring our own supply. Power is optional: we can use a standard 220V outlet or bring our own generator.' },
  { q: 'How much notice do you need?', a: 'We ask for at least 24 hours’ notice. Same-day bookings may be possible, depending on availability, and can carry an extra charge.' },
  { q: 'How quickly do you confirm a booking?', a: 'We confirm every booking within 4 hours, by email or SMS.' },
  { q: 'What is your cancellation policy?', a: 'Cancelling is free up to 24 hours before your booking. Cancellations within 24 hours may incur a 50% fee, and no-shows are charged in full.' },
  { q: 'What happens if it rains?', a: 'We may reschedule for weather or safety. There is no charge when we reschedule or cancel, and we will offer another time.' },
  { q: 'Which vehicles do you work on?', a: 'We work on cars, bakkies and SUVs. We do not service commercial vehicles over 3.5 tons. Motorcycles and recreational vehicles need special arrangements, and classic or modified cars may need extra care and carry extra charges.' },
]

export const faqCare = [
  { q: 'Are you insured?', a: 'Yes. The Car Bath carries public liability insurance.' },
  { q: 'Is it safe to have an expensive car washed by you?', a: 'Yes. We use pH-balanced soaps, soft microfibre cloths and gentle methods that help prevent scratches. We never leave your car unattended, every job ends with an inspection, and we carry public liability insurance.' },
  { q: 'Do you do paint correction?', a: 'Yes. Paint correction uses machine polishing to remove swirl marks and light scratches from the paint. We quote it after seeing the car, because the price depends on its size and condition.' },
  { q: 'Do you restore cloudy headlights?', a: 'Yes. We restore cloudy and yellowed headlights. Send us a photo on WhatsApp for a quote.' },
  { q: 'Do you offer ceramic coating?', a: 'No, we do not offer ceramic coating at the moment. Our Executive Detail polish is for shine only and does not add paint protection.' },
  { q: 'Is The Car Bath well reviewed?', a: 'Yes. The Car Bath has 5.0 stars from 21 Google reviews, as of November 2026, and has been in business for more than 4 years.' },
]

export const faqParks = [
  { q: 'What do you need from a business park or apartment block?', a: 'We need 2 parking bays or a small free space, easy access, and help telling tenants through your usual channels. We bring our own water, and power is optional.' },
  { q: 'How often do you come to a business park?', a: 'Each property gets one dedicated day, weekly or bi-weekly. We are on site for 6 to 8 hours on that day.' },
  { q: 'What does it cost a business park to host you?', a: 'Hosting needs only the parking space. We handle equipment, supplies, staffing and operations, and we agree revenue sharing with you in a clear written agreement with no hidden fees.' },
  { q: 'How do we start?', a: 'Call 068 507 0088 or email thecarsbath@gmail.com. We visit your property, find the best spot, and talk through scheduling, access and terms.' },
]

export const faqGroups = [
  { title: 'Prices and payment', items: faqPricing },
  { title: 'Where, when and how', items: faqService },
  { title: 'Care, insurance and services', items: faqCare },
  { title: 'Business parks and apartment blocks', items: faqParks },
]

export const faqHome = [faqService[0], faqPricing[1], faqPricing[4], faqService[3], faqCare[1]]
