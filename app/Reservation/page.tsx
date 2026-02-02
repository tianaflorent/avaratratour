"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCircle,
  Tag,
  Wallet,
  HelpCircle,
  MessageCircle,
  Mail,
  Smartphone, 
  DollarSign
} from "lucide-react";

import { useSearchParams } from "next/navigation";

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const excursionParam = searchParams.get("excursion");

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    excursion: "",
    date: "",
    adultes: 1,
    enfants: 0,
    message: "",
  });

  useEffect(() => {
    if (excursionParam) {
      setFormData((prev) => ({ ...prev, excursion: excursionParam }));
    }
  }, [excursionParam]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Exemple futur : WhatsApp / email / API
    console.log(formData);
    alert("Réservation envoyée !");
  };

  return (
    <main className="pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Réserver votre excursion
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-8 space-y-5"
        >
          {/* Nom */}
          <div>
            <label className="font-semibold text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom complet"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="font-semibold text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Votre numéro"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Excursion */}
          <div>
            <label className="font-semibold text-gray-700">Excursion</label>
            <select
              name="excursion"
              value={formData.excursion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            >
              <option value="">Choisir une excursion</option>
              <option value="Tsingy rouge">Tsingy rouge</option>
              <option value="Trois baies">Trois baies</option>
              <option value="Ramena">Ramena</option>
              <option value="Montagne d’Ambre">Montagne d’Ambre</option>
              <option value="Nosy Hara">Nosy Hara</option>
              <option value="Mer d’Émeraude">Mer d’Émeraude</option>
              <option value="Tour de ville">Tour de ville</option>
            </select>
          </div>

          {/* Date souhaitée */}
          <div>
            <label className="font-semibold text-gray-700">
              Date souhaitée
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              required
            />
          </div>

          {/* Adultes / Enfants */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-gray-700">Nombre d'adultes</label>
              <input
                type="number"
                min={1}
                max={7}
                name="adultes"
                value={formData.adultes}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Nombre d'enfants</label>
              <input
                type="number"
                min={0}
                max={7}
                name="enfants"
                value={formData.enfants}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Demandes spéciales */}
          <div>
            <label className="font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Allergies, préférences, besoins spéciaux..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Bouton */}
          <button
            type="button"
            onClick={() => {
            const message = `Bonjour, je souhaite réserver l'excursion *${formData.excursion}*.\n\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nDate: ${formData.date}\nAdultes: ${formData.adultes}\nEnfants: ${formData.enfants}\nDemandes spéciales: ${formData.message}`;
            const whatsappURL = `https://wa.me/261328422916?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-3 rounded-2xl shadow-md transition text-lg"
          >
            <Send size={20} /> Envoyer la réservation
          </button>

        </form>
        {/* INFOS COMPLÉMENTAIRES */}
<div className="mt-10 space-y-6">

{/* CE QUI EST INCLUS */}
<div className="bg-white rounded-3xl shadow-md p-6">
  <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
    <CheckCircle className="text-emerald-600" />
    Ce qui est inclus
  </h2>
  <ul className="space-y-2 text-gray-700">
    <li> Repas selon l’excursion</li>
    <li> Eau potable</li>
    <li> Entrée des parcs</li>
    <li> Voiture (Starex ou 4x4)</li>
    <li> Guide local francophone & anglophone</li>
  </ul>
</div>

{/* TARIFS */}
<div className="bg-white rounded-3xl shadow-md p-6">
  <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
    <Tag className="text-yellow-500" />
    Tarifs
  </h2>
  <ul className="space-y-2 text-gray-700">
  <li className="flex items-center gap-2">
    <span className="w-2 h-2 bg-yellow-400 transform rotate-45 inline-block flex-shrink-0"></span>
    5 à 12 ans : <strong>Demi-tarif</strong>
  </li>
  <li className="flex items-center gap-2">
    <span className="w-2 h-2 bg-green-400 transform rotate-45 inline-block flex-shrink-0"></span>
    -5 ans : <strong>Gratuit</strong>
  </li>
  <li className="flex items-center gap-2">
    <span className="w-2 h-2 bg-blue-400 transform rotate-45 inline-block flex-shrink-0"></span>
    +12 ans : <strong>Tarif adulte</strong>
  </li>
  <li className="flex items-center gap-2">
    <span className="w-2 h-2 bg-purple-400 transform rotate-45 inline-block flex-shrink-0"></span>
    Groupes (4+ pers) : <strong>Tarifs spéciaux</strong>
  </li>
  <li className="flex items-center gap-2">
    <span className="w-2 h-2 bg-pink-400 transform rotate-45 inline-block flex-shrink-0"></span>
    Solo : <strong>Sur demande</strong>
  </li>
</ul>


</div>

{/* MOYENS DE PAIEMENT */}
<div className="bg-white rounded-3xl shadow-md p-6">
  <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-gray-800">
    <Wallet className="text-emerald-600" />
    Moyens de paiement
  </h2>
  <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <div className="flex items-center gap-3 bg-orange-100 px-4 py-3 rounded-xl font-semibold text-orange-800">
    📱 Orange Money
  </div>
  <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl font-semibold text-gray-800">
    💵 Espèces
  </div>
</div>

  </div>
</div>

{/* BESOIN D’AIDE */}
<div className="bg-white rounded-3xl shadow-md p-6">
  <h2 className="flex items-center gap-3 text-xl font-bold mb-3 text-gray-800">
    <HelpCircle className="text-blue-600" />
    Besoin d’aide ?
  </h2>
  <p className="text-gray-600 mb-4">
    Notre équipe est disponible pour répondre à toutes vos questions et vous aider à organiser votre excursion.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="https://wa.me/261328422916"
      target="_blank"
      className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-2 rounded-xl shadow transition"
    >
      <MessageCircle /> WhatsApp
    </a>

    <a
      href="mailto:tavaratratour@gmail.com"
      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl shadow transition"
    >
      <Mail /> Email
    </a>
  </div>
</div>

</div>

      </div>
    </main>
  );
}
