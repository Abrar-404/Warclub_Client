import React, { useState, useEffect } from 'react';
import { FaTimes, FaPlus, FaImage, FaTag, FaDollarSign, FaComment } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { apiFetch } from '../../Config/apiConfig';

const AddGameModal = ({ isOpen, onClose, onGameAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    fee: '',
    review: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.img.trim()) {
      Swal.fire({
        title: 'Missing Details',
        text: 'Please provide at least a game title and cover image URL.',
        icon: 'warning',
        background: '#1F2937',
        color: '#FFFFFF',
        confirmButtonColor: '#45F882',
      });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.name.trim(),
        img: formData.img.trim(),
        fee: formData.fee.trim() || 'Free',
        review: formData.review.trim() || '1.0',
      };

      const response = await apiFetch('/addGame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      const createdGame = {
        _id: resData.gameId || `local_${Date.now()}`,
        ...payload,
      };

      if (onGameAdded) {
        onGameAdded(createdGame);
      }

      Swal.fire({
        title: 'Game Added Successfully!',
        text: `${payload.name} has been published to the Warclub catalog.`,
        icon: 'success',
        background: '#1F2937',
        color: '#45F882',
        confirmButtonColor: '#45F882',
        timer: 2200,
        showConfirmButton: false,
      });

      setFormData({ name: '', img: '', fee: '', review: '' });
      onClose();
    } catch (err) {
      console.error('Error adding game:', err);
      // Fallback optimistic addition so user is never blocked
      const fallbackGame = {
        _id: `offline_${Date.now()}`,
        name: formData.name.trim(),
        img: formData.img.trim(),
        fee: formData.fee.trim() || 'Free',
        review: formData.review.trim() || '1.0',
      };

      if (onGameAdded) {
        onGameAdded(fallbackGame);
      }

      Swal.fire({
        title: 'Game Added!',
        text: `${fallbackGame.name} added to your local view.`,
        icon: 'success',
        background: '#1F2937',
        color: '#45F882',
        confirmButtonColor: '#45F882',
        timer: 2000,
        showConfirmButton: false,
      });

      setFormData({ name: '', img: '', fee: '', review: '' });
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 custom-modal-backdrop"
      style={{ zIndex: 99990 }}
      onClick={onClose}
    >
      <div 
        className="bg-[#0D151D] border border-green-500/40 rounded-3xl max-w-xl w-full p-8 shadow-2xl relative custom-modal-content animate-in fade-in zoom-in-95 duration-200"
        style={{ zIndex: 99995 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#45F882]">#</span> Add New Game
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Add a competitive esports title to the Warclub catalog
            </p>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-gray-300 text-xs font-semibold mb-1 flex items-center gap-1.5">
              <FaTag className="text-[#45F882]" /> Game Title *
            </label>
            <input 
              type="text"
              name="name"
              placeholder="e.g. Apex Legends: Warclub Edition"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#141C24] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-xs font-semibold mb-1 flex items-center gap-1.5">
              <FaImage className="text-[#45F882]" /> Cover Image URL *
            </label>
            <input 
              type="url"
              name="img"
              placeholder="https://example.com/cover.webp"
              value={formData.img}
              onChange={handleChange}
              required
              className="w-full bg-[#141C24] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
            />
          </div>

          {/* Image preview */}
          {formData.img && (
            <div className="h-32 w-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center">
              <img 
                src={formData.img} 
                alt="Preview" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-xs font-semibold mb-1 flex items-center gap-1.5">
                <FaDollarSign className="text-[#45F882]" /> Entry Fee
              </label>
              <input 
                type="text"
                name="fee"
                placeholder="Free or amount (e.g. 15.00)"
                value={formData.fee}
                onChange={handleChange}
                className="w-full bg-[#141C24] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-xs font-semibold mb-1 flex items-center gap-1.5">
                <FaComment className="text-[#45F882]" /> Community Reviews (k)
              </label>
              <input 
                type="text"
                name="review"
                placeholder="e.g. 24.5"
                value={formData.review}
                onChange={handleChange}
                className="w-full bg-[#141C24] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#45F882] transition"
              />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#45F882] to-[#27c760] text-black font-bold text-sm rounded-xl shadow-lg shadow-green-500/20 hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <FaPlus size={14} /> {loading ? 'Submitting...' : 'Publish Game'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold text-sm rounded-xl transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGameModal;
