/**
 * GINHAWA APP — Client Controller & Interactive Engine
 * Professional Care. Natural Healing. A Better You.
 */

// --- Initial Data Store ---
const GINHAWA_DATA = {
  services: [
    {
      id: 'massage-therapy',
      name: 'Massage Therapy',
      category: 'Therapeutic Bodywork',
      desc: 'Authentic Philippine Hilot, Deep Tissue, and Swedish massage to dissolve chronic fatigue and soothe muscle tightness.',
      price: 850,
      duration: '60 / 90 / 120 mins',
      mode: 'Home Service or Clinic',
      icon: 'fa-hands',
      indications: ['Muscle soreness', 'Stress & insomnia', 'Poor circulation']
    },
    {
      id: 'muscle-joint-care',
      name: 'Muscle & Joint Care',
      category: 'Orthopedic Wellness',
      desc: 'Targeted myofascial release and joint decompression to restore joint fluidity and alleviate stiffness.',
      price: 1050,
      duration: '60 / 90 mins',
      mode: 'Home Service or Clinic',
      icon: 'fa-bone',
      indications: ['Knee stiffness', 'Shoulder impingement', 'Hip tightness']
    },
    {
      id: 'pain-relief',
      name: 'Pain Relief',
      category: 'Targeted Therapy',
      desc: 'Therapeutic interventions tailored for chronic low-back pain, sciatica, neck strain, and tension headaches.',
      price: 1100,
      duration: '60 / 90 mins',
      mode: 'Home Service or Clinic',
      icon: 'fa-fire-flame-curved',
      indications: ['Sciatica', 'Lower back pain', 'Tech-neck spasm']
    },
    {
      id: 'body-alignment',
      name: 'Body Alignment',
      category: 'Postural Rehabilitation',
      desc: 'Gentle spinal mobilization, pelvic leveling, and kinetic chain alignment to correct postural imbalances.',
      price: 1200,
      duration: '75 mins',
      mode: 'Clinic or Specialist Home Visit',
      icon: 'fa-child-reaching',
      indications: ['Scoliotic posture', 'Pelvic tilt', 'Upper cross syndrome']
    },
    {
      id: 'rehabilitation',
      name: 'Rehabilitation',
      category: 'Clinical Recovery',
      desc: 'Doctor-cleared functional reconditioning, stroke mobility maintenance, and post-operative restorative therapy.',
      price: 1350,
      duration: '60 / 90 mins',
      mode: 'Home Visit by Licensed PT',
      icon: 'fa-person-running',
      indications: ['Post-surgery recovery', 'Stroke reconditioning', 'Sports injury']
    },
    {
      id: 'wellness-programs',
      name: 'Wellness Programs',
      category: 'Preventative Health',
      desc: 'Curated recurring sessions combining manual lymphatic drainage, aromatherapy, and breathwork balancing.',
      price: 950,
      duration: '60 / 90 mins',
      mode: 'Home Service or Clinic',
      icon: 'fa-spa',
      indications: ['Chronic stress', 'Water retention', 'Immunity support']
    },
    {
      id: 'online-consultation',
      name: 'Online Consultation',
      category: 'Tele-Wellness',
      desc: 'Live 1-on-1 video evaluation with a licensed Physical Therapist for ergonomic posture checks and exercise prescription.',
      price: 650,
      duration: '45 mins',
      mode: 'Secure Video Call',
      icon: 'fa-video',
      indications: ['Ergonomic desk setup', 'Home exercise guide', 'Triage']
    },
    {
      id: 'home-service',
      name: 'Home Service',
      category: 'Mobile Care',
      desc: 'Full mobile therapeutic setup brought straight to your condo or residence with sanitized linens and organic oils.',
      price: 950,
      duration: '60 / 90 / 120 mins',
      mode: 'Metro Manila Coverage',
      icon: 'fa-house-user',
      indications: ['Convenience', 'Post-work evening care', 'Senior mobility']
    }
  ],

  therapists: [
    {
      id: 'th-1',
      name: 'Maria Teresa Santos',
      title: 'PRC Licensed Physical Therapist (PTRP)',
      license: 'PRC #0049218 · DOH Certified',
      experience: '9 Years Exp.',
      rating: 4.98,
      reviewsCount: 312,
      hourlyRate: 1100,
      specialties: ['Pain Relief', 'Rehabilitation', 'Body Alignment'],
      locations: ['Makati', 'BGC Taguig', 'Home Service'],
      avatar: 'https://images.unsplash.com/photo-1594824813576-9218faab7d3c?w=160&auto=format&fit=crop&q=80',
      fallbackColor: '#78101E',
      nextSlot: 'Today, 2:30 PM'
    },
    {
      id: 'th-2',
      name: 'Aris Dela Cruz',
      title: 'Master Hilot & Licensed Massage Therapist',
      license: 'DOH-LMT #1289 · TESDA NC-II Certified',
      experience: '12 Years Exp.',
      rating: 4.95,
      reviewsCount: 489,
      hourlyRate: 850,
      specialties: ['Massage Therapy', 'Muscle & Joint Care', 'Home Service'],
      locations: ['Quezon City', 'Pasig', 'Home Service'],
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=160&auto=format&fit=crop&q=80',
      fallbackColor: '#580B15',
      nextSlot: 'Today, 4:00 PM'
    },
    {
      id: 'th-3',
      name: 'Elena Ramos',
      title: 'Senior Physical Therapist & Posture Specialist',
      license: 'PRC #0053102 · Certified Ergonomist',
      experience: '7 Years Exp.',
      rating: 4.99,
      reviewsCount: 228,
      hourlyRate: 1250,
      specialties: ['Body Alignment', 'Rehabilitation', 'Online Consultation'],
      locations: ['Mandaluyong', 'Manila', 'Home Service'],
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&auto=format&fit=crop&q=80',
      fallbackColor: '#961727',
      nextSlot: 'Tomorrow, 10:00 AM'
    },
    {
      id: 'th-4',
      name: 'Juan Carlo Bautista',
      title: 'Certified Hilot & Deep Tissue Specialist',
      license: 'DOH-LMT #1540 · TESDA National Assessor',
      experience: '6 Years Exp.',
      rating: 4.92,
      reviewsCount: 174,
      hourlyRate: 800,
      specialties: ['Massage Therapy', 'Pain Relief', 'Home Service'],
      locations: ['Taguig', 'Alabang / Muntinlupa', 'Home Service'],
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=160&auto=format&fit=crop&q=80',
      fallbackColor: '#4A0810',
      nextSlot: 'Tomorrow, 1:15 PM'
    }
  ]
};

// --- App State ---
const state = {
  currentRole: 'customer', // 'customer' | 'therapist' | 'admin'
  bookingDraft: {
    serviceId: 'massage-therapy',
    therapistId: 'th-1',
    mode: 'home',
    date: 'Today',
    time: '2:30 PM',
    duration: 60,
    address: 'Unit 12B, Two Serendra, BGC, Taguig City',
    healthCleared: false,
    clientName: 'Juan Dela Cruz',
    clientPhone: '+63 917 123 4567',
    clientNotes: ''
  },
  confirmedBookings: []
};

// --- DOM Ready Bootstrap ---
document.addEventListener('DOMContentLoaded', () => {
  initSavedBookings();
  renderFeaturedTherapists();
  setupSearchForm();
  setupModalHandlers();
  setupRoleSwitcher();
  setupPwa();
});

// --- Persistent Storage Helpers ---
function initSavedBookings() {
  try {
    const saved = localStorage.getItem('ginhawa_bookings');
    if (saved) {
      state.confirmedBookings = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('LocalStorage unavailable', e);
  }
}

function saveBookingsToStorage() {
  try {
    localStorage.setItem('ginhawa_bookings', JSON.stringify(state.confirmedBookings));
  } catch (e) {
    console.warn('Failed saving booking', e);
  }
}

// --- Render Featured Therapists ---
function renderFeaturedTherapists(filteredTherapists = null) {
  const container = document.getElementById('featured-therapists-list');
  if (!container) return;

  const list = filteredTherapists || GINHAWA_DATA.therapists;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: #fff; border-radius: 16px; border: 1px dashed #d4af37;">
        <i class="fa-solid fa-user-doctor" style="font-size: 2.5rem; color: #78101E; margin-bottom: 12px; display: block;"></i>
        <h3 style="font-size: 1.2rem; color: #580B15; margin-bottom: 6px;">No therapists match your current search</h3>
        <p style="color: #666; font-size: 0.9rem; margin-bottom: 18px;">Try adjusting your selected location or service category.</p>
        <button onclick="resetTherapistFilter()" class="btn-signup" style="padding: 8px 20px;">View All Therapists</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(th => {
    const specsHtml = th.specialties.map(s => `<span class="spec-tag">${s}</span>`).join('');
    const locationsStr = th.locations.join(' · ');

    return `
      <div class="therapist-card" data-id="${th.id}">
        <div class="therapist-header">
          <div class="therapist-badge-row">
            <span class="verified-pill">
              <i class="fa-solid fa-circle-check"></i> Verified DOH/PRC
            </span>
            <span class="experience-tag">${th.experience}</span>
          </div>
        </div>
        <div class="therapist-avatar-wrap">
          <img src="${th.avatar}" 
               alt="${th.name}" 
               class="therapist-avatar" 
               referrerpolicy="no-referrer"
               onerror="this.src='/assets/logo.jpg';" />
          <div class="therapist-rating">
            <i class="fa-solid fa-star" style="color: #FFB800;"></i>
            <span>${th.rating}</span>
            <span style="color: #999; font-weight: normal; font-size: 0.72rem;">(${th.reviewsCount})</span>
          </div>
        </div>
        <div class="therapist-body">
          <h3 class="therapist-name">${th.name}</h3>
          <p class="therapist-role">${th.title}</p>
          <div class="specialties-row">
            ${specsHtml}
          </div>
          <div class="therapist-meta-list">
            <div class="meta-item">
              <i class="fa-solid fa-certificate meta-icon"></i>
              <span>${th.license}</span>
            </div>
            <div class="meta-item">
              <i class="fa-solid fa-location-dot meta-icon"></i>
              <span>${locationsStr}</span>
            </div>
            <div class="meta-item" style="color: #10B981; font-weight: 600;">
              <i class="fa-regular fa-clock meta-icon" style="color: #10B981;"></i>
              <span>Next available: ${th.nextSlot}</span>
            </div>
          </div>
          <div class="therapist-footer">
            <div class="price-box">
              <span class="price-sub">Rate from</span>
              <span class="price-value">₱${th.hourlyRate.toLocaleString()}</span>
            </div>
            <button class="btn-book-now" onclick="openBookingModalForTherapist('${th.id}')">
              Book Now <i class="fa-solid fa-arrow-right" style="font-size: 0.75rem; margin-left: 4px;"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Search Form Handler ---
function setupSearchForm() {
  const form = document.getElementById('hero-search-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = document.getElementById('search-location')?.value || '';
    const service = document.getElementById('search-service')?.value || '';

    let results = GINHAWA_DATA.therapists;

    if (location && location !== 'all') {
      results = results.filter(th => th.locations.some(loc => loc.toLowerCase().includes(location.toLowerCase())));
    }

    if (service && service !== 'all') {
      const selectedService = GINHAWA_DATA.services.find(s => s.id === service);
      if (selectedService) {
        results = results.filter(th => th.specialties.includes(selectedService.name));
      }
    }

    renderFeaturedTherapists(results);
    showToast(`Found ${results.length} verified therapist(s) for your criteria.`, 'success');

    // Smooth scroll to therapists section
    const targetSection = document.getElementById('therapists');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function resetTherapistFilter() {
  const locSelect = document.getElementById('search-location');
  const srvSelect = document.getElementById('search-service');
  if (locSelect) locSelect.value = 'all';
  if (srvSelect) srvSelect.value = 'all';
  renderFeaturedTherapists();
}

// --- Quick Shortcut Card Click ---
function selectServiceShortcut(serviceId) {
  const serviceObj = GINHAWA_DATA.services.find(s => s.id === serviceId);
  if (!serviceObj) return;

  state.bookingDraft.serviceId = serviceId;
  openBookingModal(serviceId);
}

// --- Booking Modal Controller ---
let currentBookingStep = 1;

function openBookingModal(preselectedServiceId = null, preselectedTherapistId = null) {
  if (preselectedServiceId) state.bookingDraft.serviceId = preselectedServiceId;
  if (preselectedTherapistId) state.bookingDraft.therapistId = preselectedTherapistId;

  currentBookingStep = 1;
  updateBookingModalUI();

  const overlay = document.getElementById('booking-modal-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openBookingModalForTherapist(therapistId) {
  state.bookingDraft.therapistId = therapistId;
  openBookingModal(null, therapistId);
}

function closeBookingModal() {
  const overlay = document.getElementById('booking-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextBookingStep() {
  if (currentBookingStep === 1) {
    // Validate Step 1
    const serviceSelect = document.getElementById('modal-service-select');
    const modeSelect = document.querySelector('input[name="service-mode"]:checked');
    if (serviceSelect) state.bookingDraft.serviceId = serviceSelect.value;
    if (modeSelect) state.bookingDraft.mode = modeSelect.value;
    currentBookingStep = 2;
  } else if (currentBookingStep === 2) {
    // Validate Step 2
    const thSelect = document.getElementById('modal-therapist-select');
    const timeSelect = document.getElementById('modal-time-slot');
    if (thSelect) state.bookingDraft.therapistId = thSelect.value;
    if (timeSelect) state.bookingDraft.time = timeSelect.value;
    currentBookingStep = 3;
  } else if (currentBookingStep === 3) {
    // Health screening check
    const healthClearCheckbox = document.getElementById('screening-cleared');
    if (healthClearCheckbox && !healthClearCheckbox.checked) {
      showToast('Please confirm the Health & Safety Screening criteria to continue.', 'error');
      return;
    }
    state.bookingDraft.healthCleared = true;
    currentBookingStep = 4;
  } else if (currentBookingStep === 4) {
    // Complete booking and generate receipt
    completeBookingConfirmation();
    return;
  }
  updateBookingModalUI();
}

function prevBookingStep() {
  if (currentBookingStep > 1) {
    currentBookingStep--;
    updateBookingModalUI();
  }
}

function updateBookingModalUI() {
  // Update step indicators
  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById(`step-indicator-${i}`);
    if (indicator) {
      if (i === currentBookingStep) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }
  }

  // Populate dynamic step views
  const stepContainer = document.getElementById('modal-step-content');
  if (!stepContainer) return;

  const currentService = GINHAWA_DATA.services.find(s => s.id === state.bookingDraft.serviceId) || GINHAWA_DATA.services[0];
  const currentTherapist = GINHAWA_DATA.therapists.find(t => t.id === state.bookingDraft.therapistId) || GINHAWA_DATA.therapists[0];

  if (currentBookingStep === 1) {
    stepContainer.innerHTML = `
      <div class="form-group">
        <label class="form-label">Select Wellness Service</label>
        <select id="modal-service-select" class="form-select" onchange="state.bookingDraft.serviceId=this.value;">
          ${GINHAWA_DATA.services.map(s => `
            <option value="${s.id}" ${s.id === state.bookingDraft.serviceId ? 'selected' : ''}>
              ${s.name} (₱${s.price.toLocaleString()} · ${s.duration})
            </option>
          `).join('')}
        </select>
        <small style="display:block; color:#666; margin-top:6px; font-size:0.8rem;">
          ${currentService.desc}
        </small>
      </div>

      <div class="form-group">
        <label class="form-label">Service Delivery Mode</label>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
          <label style="border:1px solid #d4af37; padding:12px; border-radius:10px; display:flex; gap:10px; cursor:pointer; background: #fffcf5;">
            <input type="radio" name="service-mode" value="home" checked />
            <div>
              <strong style="display:block; font-size:0.88rem; color:#580B15;">Home Service</strong>
              <small style="color:#666; font-size:0.75rem;">Therapist visits your home/hotel</small>
            </div>
          </label>
          <label style="border:1px solid #ccc; padding:12px; border-radius:10px; display:flex; gap:10px; cursor:pointer;">
            <input type="radio" name="service-mode" value="clinic" />
            <div>
              <strong style="display:block; font-size:0.88rem; color:#333;">Partner Clinic</strong>
              <small style="color:#666; font-size:0.75rem;">Visit partner wellness center</small>
            </div>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Session Duration</label>
        <div style="display:flex; gap:10px;">
          <button type="button" class="btn-outline-gold" style="flex:1; padding:8px;" onclick="setDuration(60)">60 Mins</button>
          <button type="button" class="btn-outline-gold" style="flex:1; padding:8px;" onclick="setDuration(90)">90 Mins</button>
          <button type="button" class="btn-outline-gold" style="flex:1; padding:8px;" onclick="setDuration(120)">120 Mins</button>
        </div>
      </div>
    `;
  } else if (currentBookingStep === 2) {
    stepContainer.innerHTML = `
      <div class="form-group">
        <label class="form-label">Assigned Verified Therapist</label>
        <select id="modal-therapist-select" class="form-select">
          ${GINHAWA_DATA.therapists.map(t => `
            <option value="${t.id}" ${t.id === state.bookingDraft.therapistId ? 'selected' : ''}>
              ${t.name} (${t.title} · ₱${t.hourlyRate.toLocaleString()}/hr)
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Preferred Date & Time Slot</label>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
          <input type="date" class="form-input" value="2026-11-06" min="2026-11-06" />
          <select id="modal-time-slot" class="form-select">
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:30 PM" selected>2:30 PM (Earliest)</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="8:00 PM">8:00 PM</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Service Address / Destination</label>
        <input type="text" class="form-input" id="client-address" value="${state.bookingDraft.address}" placeholder="House/Condo #, Street, Barangay, City" />
      </div>
    `;
  } else if (currentBookingStep === 3) {
    stepContainer.innerHTML = `
      <div style="background:#FFF9E6; border:1px solid #FFE499; border-radius:12px; padding:16px; margin-bottom:18px;">
        <h4 style="font-size:0.95rem; color:#8C6200; margin-bottom:6px; display:flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-notes-medical"></i> Pre-Session Health & Safety Screening
        </h4>
        <p style="font-size:0.82rem; color:#555; line-height:1.45;">
          Under Ginhawa Safety Protocol & RA 10173, therapists must verify that contraindications are declared prior to physical touch.
        </p>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
        <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.85rem; color:#333; cursor:pointer;">
          <input type="checkbox" style="margin-top:3px;" />
          <span>I do not currently have an active fever, contagious skin lesion, or infectious illness.</span>
        </label>
        <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.85rem; color:#333; cursor:pointer;">
          <input type="checkbox" style="margin-top:3px;" />
          <span>I do not have uncontrolled severe hypertension, acute thrombosis, or recent bone fracture (<6 weeks).</span>
        </label>
        <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.85rem; color:#333; cursor:pointer;">
          <input type="checkbox" id="screening-cleared" style="margin-top:3px;" />
          <strong style="color:#78101E;">I confirm that I am fit for wellness therapy and agree to Ginhawa Safety & Boundaries Policy.</strong>
        </label>
      </div>

      <div class="form-group">
        <label class="form-label">Client Notes or Areas of Discomfort (Optional)</label>
        <textarea class="form-textarea" rows="2" placeholder="e.g. Focus on lower back and stiff neck; light pressure on knees."></textarea>
      </div>
    `;
  } else if (currentBookingStep === 4) {
    // Illustrative ₱1,000 Model from the Master Specification:
    // Gross: ₱1,000
    // Payment Gateway (2%): ₱20
    // Illustrative VAT (12%): ₱120
    // Ginhawa Platform Commission (22%): ₱220
    // Therapist Net Remaining: ₱640
    // Therapist Welfare & Insurance Contribution: ₱50 per booking
    const grossPrice = currentService.price || 1000;
    const gatewayFee = Math.round(grossPrice * 0.02);
    const taxIllustrative = Math.round(grossPrice * 0.12);
    const commissionFee = Math.round(grossPrice * 0.22);
    const therapistShare = grossPrice - gatewayFee - taxIllustrative - commissionFee;

    stepContainer.innerHTML = `
      <div style="text-align:center; margin-bottom:16px;">
        <span style="background:rgba(120, 16, 30, 0.08); color:#78101E; font-size:0.75rem; font-weight:700; padding:4px 12px; border-radius:999px;">
          STEP 4: TRANSPARENT SETTLEMENT & REVIEW
        </span>
        <h4 style="font-size:1.15rem; color:#38040B; margin-top:8px;">Booking Summary</h4>
      </div>

      <div class="fee-breakdown-card">
        <div class="fee-row">
          <span>Service Selected:</span>
          <strong>${currentService.name} (${state.bookingDraft.duration} mins)</strong>
        </div>
        <div class="fee-row">
          <span>Assigned Practitioner:</span>
          <strong>${currentTherapist.name} (${currentTherapist.license.split('·')[0]})</strong>
        </div>
        <div class="fee-row">
          <span>Schedule:</span>
          <strong>${state.bookingDraft.date}, ${state.bookingDraft.time}</strong>
        </div>
        <div class="fee-row">
          <span>Gross Service Fee:</span>
          <strong>₱${grossPrice.toLocaleString()}</strong>
        </div>
        
        <div style="border-top: 1px dashed #ccc; margin: 10px 0; padding-top: 8px;">
          <small style="color:#777; display:block; font-size:0.75rem; margin-bottom:4px;">
            Fair Care Split Breakdown (Ref. Ginhawa Master Policy):
          </small>
          <div class="fee-row" style="font-size:0.8rem; color:#666;">
            <span>· Payment Gateway (2%):</span>
            <span>₱${gatewayFee}</span>
          </div>
          <div class="fee-row" style="font-size:0.8rem; color:#666;">
            <span>· Illustrative Tax (12%):</span>
            <span>₱${taxIllustrative}</span>
          </div>
          <div class="fee-row" style="font-size:0.8rem; color:#666;">
            <span>· Platform Operations & Support (22%):</span>
            <span>₱${commissionFee}</span>
          </div>
          <div class="fee-row" style="font-size:0.8rem; color:#10B981; font-weight:600;">
            <span>· Therapist Direct Earnings:</span>
            <span>₱${therapistShare}</span>
          </div>
          <div class="fee-row" style="font-size:0.78rem; color:#C99726;">
            <span>· Therapist Insurance Fund Cycle Contribution:</span>
            <span>+₱50 accrued to therapist safety target</span>
          </div>
        </div>

        <div class="fee-row total">
          <span>Total Payable Amount:</span>
          <span>₱${grossPrice.toLocaleString()}</span>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Payment Method</label>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
          <label style="border:1px solid #78101E; border-radius:8px; padding:10px; text-align:center; cursor:pointer; background:#fffcf5;">
            <input type="radio" name="payment-method" value="gcash" checked />
            <span style="display:block; font-weight:700; font-size:0.85rem; color:#005CE6;">GCash</span>
          </label>
          <label style="border:1px solid #ccc; border-radius:8px; padding:10px; text-align:center; cursor:pointer;">
            <input type="radio" name="payment-method" value="maya" />
            <span style="display:block; font-weight:700; font-size:0.85rem; color:#00D632;">Maya</span>
          </label>
          <label style="border:1px solid #ccc; border-radius:8px; padding:10px; text-align:center; cursor:pointer;">
            <input type="radio" name="payment-method" value="card" />
            <span style="display:block; font-weight:700; font-size:0.85rem;">Card</span>
          </label>
        </div>
      </div>
    `;
  }

  // Update Buttons
  const footerBtnBack = document.getElementById('modal-btn-prev');
  const footerBtnNext = document.getElementById('modal-btn-next');
  if (footerBtnBack) {
    footerBtnBack.style.display = currentBookingStep > 1 ? 'inline-block' : 'none';
  }
  if (footerBtnNext) {
    footerBtnNext.textContent = currentBookingStep === 4 ? 'Confirm & Book Appointment' : 'Continue ->';
  }
}

function setDuration(mins) {
  state.bookingDraft.duration = mins;
  showToast(`Duration set to ${mins} minutes.`, 'info');
}

function completeBookingConfirmation() {
  const bookingRef = 'GIN-' + Math.floor(100000 + Math.random() * 900000);
  const currentService = GINHAWA_DATA.services.find(s => s.id === state.bookingDraft.serviceId) || GINHAWA_DATA.services[0];
  const currentTherapist = GINHAWA_DATA.therapists.find(t => t.id === state.bookingDraft.therapistId) || GINHAWA_DATA.therapists[0];

  const newBooking = {
    ref: bookingRef,
    service: currentService.name,
    therapist: currentTherapist.name,
    date: '2026-11-06',
    time: state.bookingDraft.time,
    amount: currentService.price,
    status: 'CONFIRMED',
    timestamp: new Date().toISOString()
  };

  state.confirmedBookings.unshift(newBooking);
  saveBookingsToStorage();

  const stepContainer = document.getElementById('modal-step-content');
  if (stepContainer) {
    stepContainer.innerHTML = `
      <div style="text-align:center; padding: 24px 12px;">
        <div style="width:68px; height:68px; border-radius:999px; background:#D1FAE5; color:#059669; font-size:2rem; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
          <i class="fa-solid fa-check"></i>
        </div>
        <h3 style="font-size:1.4rem; color:#580B15; margin-bottom:6px;">Appointment Confirmed!</h3>
        <p style="color:#555; font-size:0.9rem; margin-bottom:18px;">
          Your booking is locked with <strong>${currentTherapist.name}</strong>.
        </p>

        <div style="background:#F8F9FA; border:1px solid #E5E7EB; border-radius:12px; padding:16px; margin-bottom:20px; text-align:left;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="color:#666; font-size:0.8rem;">Booking Reference:</span>
            <strong style="color:#78101E; font-size:0.9rem;">${bookingRef}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="color:#666; font-size:0.8rem;">Service:</span>
            <span style="font-weight:600; font-size:0.85rem;">${currentService.name}</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="color:#666; font-size:0.8rem;">Date & Time:</span>
            <span style="font-weight:600; font-size:0.85rem;">Today, ${state.bookingDraft.time}</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="color:#666; font-size:0.8rem;">Status:</span>
            <span style="color:#10B981; font-weight:700; font-size:0.85rem;">DISPATCH NOTIFIED</span>
          </div>
        </div>

        <button onclick="closeBookingModal()" class="btn-signup" style="width:100%; padding:12px; font-size:0.95rem;">
          View in My Bookings
        </button>
      </div>
    `;
  }

  // Hide nav buttons on confirmation screen
  const footerBtnBack = document.getElementById('modal-btn-prev');
  const footerBtnNext = document.getElementById('modal-btn-next');
  if (footerBtnBack) footerBtnBack.style.display = 'none';
  if (footerBtnNext) footerBtnNext.style.display = 'none';

  showToast(`Booking ${bookingRef} created successfully!`, 'success');
}

// --- Setup Modal Handlers ---
function setupModalHandlers() {
  const closeBtn = document.getElementById('booking-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);

  const prevBtn = document.getElementById('modal-btn-prev');
  if (prevBtn) prevBtn.addEventListener('click', prevBookingStep);

  const nextBtn = document.getElementById('modal-btn-next');
  if (nextBtn) nextBtn.addEventListener('click', nextBookingStep);
}

// --- Safety Incident Report Modal ---
function openSafetyModal() {
  const overlay = document.getElementById('safety-modal-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSafetyModal() {
  const overlay = document.getElementById('safety-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function submitSafetyReport(e) {
  if (e) e.preventDefault();
  const category = document.getElementById('incident-category')?.value || 'General';
  const severity = document.getElementById('incident-severity')?.value || 'Moderate';
  const caseId = 'CASE-SAF-' + Math.floor(1000 + Math.random() * 9000);

  closeSafetyModal();
  showToast(`Report logged (${caseId}) with priority: ${severity}. A Safety Officer is assigned.`, 'success');
}

// --- Role Switcher (Customer / Therapist / Admin) ---
function setupRoleSwitcher() {
  const buttons = document.querySelectorAll('.role-link-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.dataset.role;
      state.currentRole = role;

      if (role === 'therapist') {
        window.location.href = 'therapist-portal.html';
      } else if (role === 'admin') {
        showToast('Admin Portal Preview: Real-time bookings & safety queue enabled.', 'info');
      } else {
        showToast('Switched to Client Booking Experience.', 'info');
      }
    });
  });
}

// --- Toast Notifications ---
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color:${type === 'success' ? '#10B981' : '#78101E'};"></i>
    <span style="font-size:0.86rem; color:#333; font-weight:500;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- PWA Installation Setup ---
let deferredPrompt;
function setupPwa() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('SW registration note:', err);
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBanner = document.getElementById('pwa-install-banner');
    if (installBanner) installBanner.style.display = 'flex';
  });
}

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Thank you for installing Ginhawa App!', 'success');
      }
      deferredPrompt = null;
    });
  } else {
    showToast('To install Ginhawa on iOS: tap Share -> "Add to Home Screen".', 'info');
  }
}
