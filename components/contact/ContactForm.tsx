'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMedium};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMedium};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.textMedium};
    cursor: not-allowed;
    transform: none;
  }
`;

const HelpText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMedium};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const SuccessMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: #10B981;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: #DC2626;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Placeholder for form submission
        // TODO: Replace with actual API endpoint
        setTimeout(() => {
            console.log('Form data:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            {status === 'success' && (
                <SuccessMessage>
                    Mulțumesc pentru mesaj! Îți voi răspunde în maxim 24 de ore.
                </SuccessMessage>
            )}

            {status === 'error' && (
                <ErrorMessage>
                    A apărut o eroare. Te rog încearcă din nou sau contactează-mă direct pe email.
                </ErrorMessage>
            )}

            <FormGroup>
                <Label htmlFor="name">Numele tău *</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Maria Popescu"
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: maria@exemplu.ro"
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: 0721 123 456"
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="businessType">Tipul afacerii</Label>
                <Input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Ex: Salon de înfrumusețare, Cafenea, Frizerie..."
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="message">Mesajul tău *</Label>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Spune-mi câteva rânduri despre afacerea ta: ce faci, pentru cine și ce ai vrea să afle vizitatorii de pe site. Cu cât mai multe detalii, cu atât mai bine pot estima."
                    required
                />
            </FormGroup>

            <SubmitButton type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Se trimite...' : 'Trimite mesajul'}
            </SubmitButton>

            <HelpText>
                Îți răspund în maxim <strong>24 de ore</strong> (de obicei mai repede).
                Dacă preferi să vorbim direct, sună-mă sau scrie-mi pe WhatsApp.
            </HelpText>
        </Form>
    );
}
