import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBriefcase, faMap, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Statistics() {
  const stats = [
    { value: '5+', label: 'Years of Experience', icon: faAward },
    { value: '500+', label: 'Projects Completed', icon: faBriefcase },
    { value: '36+', label: 'States Reached', icon: faMap },
    { value: '8am-10pm', label: 'Daily Live Support', icon: faHeadset },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex gap-4 items-center pl-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] flex-shrink-0">
                <FontAwesomeIcon icon={stat.icon} className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl sm:text-5xl font-extrabold text-[#0F2D5C] tracking-tight leading-none font-heading">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#374151] mt-1 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
