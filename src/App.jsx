import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Laptop,
  ShieldCheck,
  ServerCog,
  Wrench,
  Globe2,
  Headphones,
  Clock3,
  Building2,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const services = [
  {
    icon: Globe2,
    title: "Pembuatan Website Perusahaan",
    desc: "Company profile, landing page, katalog produk, portal internal, hingga website custom yang cepat, aman, dan mudah dikelola.",
  },
  {
    icon: Code2,
    title: "Aplikasi & Software Custom",
    desc: "Sistem operasional bisnis, dashboard admin, inventory, CRM sederhana, booking, approval workflow, dan integrasi API.",
  },
  {
    icon: ServerCog,
    title: "Maintenance Sistem",
    desc: "Pemantauan, backup, perbaikan bug, optimasi performa, pembaruan fitur, serta dokumentasi teknis berkala.",
  },
  {
    icon: Laptop,
    title: "Perbaikan Laptop / PC",
    desc: "Diagnosa hardware dan software, instalasi ulang, upgrade storage/RAM, troubleshooting jaringan, printer, dan perangkat kerja.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance OS & Keamanan",
    desc: "Instalasi sistem operasi, hardening dasar, antivirus, patching, recovery data ringan, dan konfigurasi akun kerja.",
  },
  {
    icon: Headphones,
    title: "Technical Support Bisnis",
    desc: "Dukungan teknis untuk kantor, onboarding perangkat, remote assistance, kunjungan berkala, dan SOP penggunaan sistem.",
  },
];

const process = [
  "Konsultasi kebutuhan bisnis",
  "Analisis alur kerja dan estimasi",
  "Desain solusi dan timeline",
  "Implementasi, testing, dan revisi",
  "Go-live, dokumentasi, dan support",
];

const packages = [
  {
    name: "Website Starter",
    price: "Mulai 2,5 jt",
    desc: "Cocok untuk UMKM dan bisnis yang butuh profil online profesional.",
    items: [
      "Landing page / company profile",
      "Desain responsif",
      "Form kontak / WhatsApp",
      "Basic SEO",
      "Training singkat",
    ],
  },
  {
    name: "Business System",
    price: "By quotation",
    desc: "Untuk perusahaan yang membutuhkan aplikasi atau software operasional custom.",
    items: [
      "Analisis kebutuhan",
      "Dashboard admin",
      "Database & role user",
      "Integrasi API",
      "Maintenance opsional",
    ],
    featured: true,
  },
  {
    name: "IT Care Monthly",
    price: "Mulai 1 jt / bulan",
    desc: "Paket support rutin untuk komputer kantor dan sistem kerja digital.",
    items: [
      "Remote support",
      "Kunjungan berkala",
      "Maintenance OS",
      "Backup & patching",
      "Laporan bulanan",
    ],
  },
];

function LogoMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-20 overflow-hidden rounded-xl bg-[#061225] shadow-[0_0_30px_rgba(0,212,255,0.22)] ring-1 ring-cyan-300/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D4FFF] via-[#00C8FF] to-[#06204A] opacity-95" />

        <div className="absolute left-2 top-2 text-[24px] font-black italic tracking-[-0.18em] text-white drop-shadow-lg">
          LIT
        </div>

        <div className="absolute right-0 top-2 flex flex-col gap-1">
          {[0, 1, 2, 3, 4].map((row) => (
            <div key={row} className="flex justify-end gap-1 pr-1">
              {Array.from({ length: 5 - row }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-sm bg-cyan-100/90" />
              ))}
            </div>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="leading-tight">
          <div className="text-sm font-black tracking-[0.32em] text-slate-950">
            LALA INTEGRA
          </div>
          <div className="mt-1 flex items-center gap-2 text-[10px] font-bold tracking-[0.5em] text-blue-600">
            <span className="h-px w-6 bg-blue-500" />
            TEKNOLOGI
            <span className="h-px w-6 bg-blue-500" />
          </div>
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-extrabold text-slate-950">{service.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>

      <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 transition group-hover:opacity-100">
        Pelajari layanan <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <LogoMark />

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#layanan" className="hover:text-blue-600">
              Layanan
            </a>
            <a href="#proses" className="hover:text-blue-600">
              Proses
            </a>
            <a href="#paket" className="hover:text-blue-600">
              Paket
            </a>
            <a href="#kontak" className="hover:text-blue-600">
              Kontak
            </a>
          </nav>

<a
  href="https://wa.me/628811944317?text=Halo%20Lala%20Integra%20Teknologi%2C%20saya%20ingin%20konsultasi%20layanan%20IT."
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.01]"
>
  Chat via WhatsApp <ArrowRight className="h-4 w-4" />
</a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#050B17] pt-32 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur"
            >
              <Star className="h-4 w-4 fill-cyan-300 text-cyan-300" />
              Solusi IT terintegrasi untuk bisnis modern
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            >
              Website, software, dan support IT yang bikin bisnis berjalan lebih rapi.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Lala Integra Teknologi membantu perusahaan membangun sistem digital yang
              profesional, aman, dan siap digunakan: mulai dari website, aplikasi custom,
              maintenance sistem, hingga perawatan perangkat komputer kantor.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
           <a
  href="https://wa.me/628811944317?text=Halo%20Lala%20Integra%20Teknologi%2C%20saya%20ingin%20konsultasi%20layanan%20IT."
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.01]"
>
  Chat via WhatsApp <ArrowRight className="h-4 w-4" />
</a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Lihat Layanan
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
            >
              <div>
                <div className="text-3xl font-black text-white">360°</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  IT support dari web sampai device
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white">Custom</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  Solusi sesuai alur bisnis
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white">Secure</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  Stabilitas dan keamanan
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-600/40 to-cyan-300/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.7rem] bg-[#061225] p-5 ring-1 ring-white/10">
                <div className="mb-5 flex items-center justify-between">
                  <LogoMark compact />

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                </div>

                <div className="rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6">
                  <div className="mb-6 h-3 w-32 rounded-full bg-cyan-300/70" />

                  <div className="space-y-3">
                    <div className="h-5 w-10/12 rounded-full bg-white/80" />
                    <div className="h-5 w-7/12 rounded-full bg-white/45" />
                    <div className="h-5 w-9/12 rounded-full bg-white/25" />
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {["Website", "Software", "Support", "Maintenance"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <div className="mb-3 h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-300" />
                        <div className="text-sm font-bold text-white">{item}</div>
                        <div className="mt-2 h-2 w-20 rounded-full bg-white/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: Building2,
              title: "Corporate Ready",
              text: "Tampilan profesional untuk perusahaan",
            },
            {
              icon: ShieldCheck,
              title: "Reliable & Secure",
              text: "Sistem lebih stabil dan aman",
            },
            {
              icon: Clock3,
              title: "Fast Response",
              text: "Support cepat saat dibutuhkan",
            },
            {
              icon: Wrench,
              title: "End-to-End",
              text: "Dari development sampai maintenance",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <div className="font-black text-slate-950">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="layanan" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Layanan Utama</SectionLabel>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Bangun fondasi digital yang siap tumbuh bersama bisnis.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Kami menggabungkan development, maintenance, dan technical support agar
              perusahaan tidak perlu pusing mengurus banyak vendor untuk kebutuhan IT harian.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="proses" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionLabel>Cara Kerja</SectionLabel>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Proses rapi, hasil jelas, dan komunikasi tetap transparan.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Setiap project dimulai dari pemahaman kebutuhan bisnis. Setelah itu baru
              masuk ke desain solusi, timeline, implementasi, testing, sampai pendampingan
              setelah sistem digunakan.
            </p>

         <a
  href="https://wa.me/628811944317?text=Halo%20Lala%20Integra%20Teknologi%2C%20saya%20ingin%20konsultasi%20layanan%20IT."
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.01]"
>
  Chat via WhatsApp <ArrowRight className="h-4 w-4" />
</a>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-500 via-cyan-300 to-transparent" />

            <div className="space-y-5">
              {process.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="relative flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 font-black text-white shadow-lg shadow-blue-500/20">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-950">{item}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Tahap ini memastikan solusi yang dibuat tepat sasaran, mudah dipakai,
                      dan tidak jadi fitur bagus tapi jarang disentuh.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061225] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(13,79,255,0.32),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <SectionLabel>Kenapa LIT</SectionLabel>

            <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-5xl">
              Partner IT yang bicara bahasa bisnis.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
            {[
              {
                title: "Terintegrasi",
                desc: "Website, software, perangkat, dan support ditangani dalam satu ekosistem layanan.",
              },
              {
                title: "Profesional",
                desc: "Tampilan, dokumentasi, dan komunikasi dibuat layak untuk kebutuhan perusahaan.",
              },
              {
                title: "Fleksibel",
                desc: "Solusi dapat disesuaikan dengan budget, prioritas, dan tahap pertumbuhan bisnis.",
              },
              {
                title: "Jangka Panjang",
                desc: "Tidak berhenti setelah project selesai. Maintenance dan support tetap bisa dilanjutkan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <CheckCircle2 className="mb-5 h-7 w-7 text-cyan-300" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paket" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Paket Layanan</SectionLabel>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Pilih kebutuhan awal, lalu kita sesuaikan detailnya.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Harga final mengikuti scope pekerjaan, kompleksitas fitur, jumlah perangkat,
              dan kebutuhan maintenance.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-[2rem] border p-7 shadow-sm ${
                  pkg.featured
                    ? "border-blue-400 bg-slate-950 text-white shadow-2xl shadow-blue-950/20"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-7 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Popular
                  </div>
                )}

                <h3 className="text-2xl font-black">{pkg.name}</h3>

                <div className={`mt-4 text-3xl font-black ${pkg.featured ? "text-cyan-200" : "text-blue-700"}`}>
                  {pkg.price}
                </div>

                <p className={`mt-4 text-sm leading-7 ${pkg.featured ? "text-slate-300" : "text-slate-600"}`}>
                  {pkg.desc}
                </p>

                <ul className="mt-7 space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className={`h-5 w-5 ${pkg.featured ? "text-cyan-300" : "text-blue-600"}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
        <a
  href="https://wa.me/628811944317?text=Halo%20Lala%20Integra%20Teknologi%2C%20saya%20ingin%20konsultasi%20layanan%20IT."
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.01]"
>
  Chat via WhatsApp <ArrowRight className="h-4 w-4" />
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#061225] p-8 text-white sm:p-12">
              <SectionLabel>Use Case</SectionLabel>

              <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-5xl">
                Contoh solusi yang bisa dibangun.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Dari kebutuhan sederhana sampai sistem internal yang lebih serius, semuanya
                bisa dirancang bertahap agar investasi tetap efisien.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-2">
              {[
                "Website company profile dengan halaman layanan dan kontak WhatsApp",
                "Aplikasi inventory barang kantor dan laporan stok",
                "Sistem tiket support internal untuk tim IT / perusahaan",
                "Dashboard penjualan, customer, dan laporan operasional",
                "Maintenance komputer kantor dan optimasi sistem operasi",
                "Migrasi email bisnis, domain, hosting, dan backup data",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-blue-600" />
                  <p className="text-sm font-bold leading-7 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,79,255,0.32),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.22),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <LogoMark />

            <h2 className="mt-10 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-5xl">
              Siap merapikan sistem digital perusahaan Anda?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Ceritakan kebutuhan bisnis, kendala IT, atau ide aplikasi yang ingin dibuat.
              Kami bantu petakan solusi paling masuk akal dari sisi fungsi, biaya, dan timeline.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: "0881-1944-317",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@lalaintegra.id",
                },
                {
                  icon: MapPin,
                  label: "Area",
                  value: "Indonesia",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-bold text-white">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
            <h3 className="text-2xl font-black">Kirim Brief Singkat</h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Isi kebutuhan awal Anda. Form ini bisa disambungkan ke email, WhatsApp,
              atau backend saat website dipublikasikan.
            </p>

            <div className="mt-6 space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                placeholder="Nama Anda"
              />

              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                placeholder="Nama Perusahaan"
              />

              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                placeholder="Email / WhatsApp"
              />

              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white">
                <option>Kebutuhan layanan</option>
                <option>Pembuatan Website</option>
                <option>Aplikasi / Software Custom</option>
                <option>Maintenance Sistem</option>
                <option>Perbaikan Laptop / PC</option>
                <option>Technical Support</option>
              </select>

              <textarea
                rows="5"
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                placeholder="Ceritakan kebutuhan atau kendala Anda"
              />

              <a
  href="https://wa.me/628811944317?text=Halo%20Lala%20Integra%20Teknologi%2C%20saya%20ingin%20konsultasi%20layanan%20IT."
  target="_blank"
  rel="noreferrer"
  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.01]"
>
  Chat via WhatsApp <ArrowRight className="h-4 w-4" />
</a>
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#030712] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Lala Integra Teknologi. Solusi Terintegrasi, Teknologi Tanpa Batas.</div>

          <div className="flex gap-5">
            <a href="#layanan" className="hover:text-cyan-300">
              Layanan
            </a>
            <a href="#paket" className="hover:text-cyan-300">
              Paket
            </a>
            <a href="#kontak" className="hover:text-cyan-300">
              Kontak
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
