'use client';

import { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Calendar, Download, Filter, Edit2, Trash2, Eye } from 'lucide-react';

// Sample data
const chartData = [
  { month: 'Jan', applications: 120, accepted: 95, rejected: 25 },
  { month: 'Feb', applications: 180, accepted: 140, rejected: 40 },
  { month: 'Mar', applications: 240, accepted: 180, rejected: 60 },
  { month: 'Apr', applications: 210, accepted: 160, rejected: 50 },
  { month: 'May', applications: 280, accepted: 210, rejected: 70 },
];

const majorDistribution = [
  { name: 'Teknik Informatika', value: 320, color: '#059669' },
  { name: 'Sistem Informasi', value: 240, color: '#10b981' },
  { name: 'Rekayasa Perangkat Lunak', value: 190, color: '#34d399' },
  { name: 'Jaringan Komputer', value: 150, color: '#6ee7b7' },
];

const verificationData = [
  { id: 1, name: 'Ahmad Rahman', status: 'Approved', date: '19 Mei 2026', major: 'TI', action: 'APPROVE' },
  { id: 2, name: 'Siti Nurhaliza', status: 'Pending', date: '18 Mei 2026', major: 'SI', action: 'PENDING' },
  { id: 3, name: 'Budi Santoso', status: 'Rejected', date: '17 Mei 2026', major: 'RPL', action: 'REJECT' },
];

// Stat Card Component
const StatCard = ({ title, value, change, isPositive, icon }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
        <div className="flex items-center mt-2 gap-1">
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-3 rounded-lg">
        {icon}
      </div>
    </div>
  </div>
);

// Chart Card Component
const ChartCard = ({ title, children, action }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      {action && (
        <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
          {action}
        </button>
      )}
    </div>
    {children}
  </div>
);

// Main Admin Dashboard
export default function AdminDashboard() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [dateRange, setDateRange] = useState('month');

  const stats = [
    {
      title: 'Total Pendaftar',
      value: '1,248',
      change: '+12% dari bulan lalu',
      isPositive: true,
      icon: <div className="text-2xl">📊</div>,
    },
    {
      title: 'Sudah Diverifikasi',
      value: '856',
      change: '+8% dari bulan lalu',
      isPositive: true,
      icon: <div className="text-2xl">✓</div>,
    },
    {
      title: 'Diterima',
      value: '392',
      change: '-2% dari bulan lalu',
      isPositive: false,
      icon: <div className="text-2xl">🎓</div>,
    },
  ];

  const filteredVerificationData = useMemo(() => {
    if (selectedStatus === 'all') return verificationData;
    return verificationData.filter(item => item.action.toLowerCase() === selectedStatus.toLowerCase());
  }, [selectedStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Statistik Penerimaan</h1>
              <p className="text-gray-600 text-sm mt-1">Dashboard Admin SPMB 2026</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                <Calendar className="w-4 h-4" />
                {new Date().toLocaleDateString('id-ID')}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                <Download className="w-4 h-4" />
                Unduh PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Application Trend Chart */}
          <div className="lg:col-span-2">
            <ChartCard title="Tren Pendaftaran Mengajak" action="Lihat Rincian">
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="applications"
                      stroke="#059669"
                      strokeWidth={3}
                      dot={{ fill: '#059669', r: 5 }}
                      activeDot={{ r: 7 }}
                      name="Total Pendaftar"
                    />
                    <Line
                      type="monotone"
                      dataKey="accepted"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ fill: '#10b981', r: 4 }}
                      name="Diterima"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          {/* Distribution Chart */}
          <ChartCard title="Distribusi Jurusan">
            <div className="w-full h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={majorDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name.split(' ')[0]}: ${value}`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {majorDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} siswa`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Verification Table */}
        <ChartCard title="Status Verifikasi Terbaru">
          <div className="overflow-x-auto">
            {/* Filter Buttons */}
            <div className="mb-6 flex gap-2 flex-wrap">
              {['all', 'approve', 'pending', 'reject'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'Semua' : status === 'approve' ? 'Disetujui' : status === 'pending' ? 'Menunggu' : 'Ditolak'}
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tanggal</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Jurusan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredVerificationData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.action === 'APPROVE'
                            ? 'bg-green-100 text-green-800'
                            : item.action === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.major}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="Lihat">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-amber-50 rounded-lg text-amber-600 transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors" title="Hapus">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        {/* Footer Stats */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Persentase Kelulusan</p>
              <h4 className="text-2xl font-bold text-emerald-600 mt-2">31.4%</h4>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Rata-rata Skor</p>
              <h4 className="text-2xl font-bold text-blue-600 mt-2">78.5</h4>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Selesai Verifikasi</p>
              <h4 className="text-2xl font-bold text-purple-600 mt-2">68.5%</h4>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Masih Diproses</p>
              <h4 className="text-2xl font-bold text-orange-600 mt-2">31.5%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
