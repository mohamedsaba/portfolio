import avatar from '../../../assets/images/avatar.jpg';

const SignatureLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="h-10 w-10 rounded-xl overflow-hidden border border-paper-accent/20 transition-all duration-300 group-hover:rounded-2xl group-hover:shadow-lg group-hover:shadow-paper-accent/20">
          <img src={avatar} alt="Mohamed Saba" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[1.15rem] font-serif leading-none text-paper-text" style={{ letterSpacing: '-0.04em' }}>
          Mohamed <span className="text-paper-accent italic">Saba</span>
        </div>
        <span className="text-[8px] font-mono uppercase tracking-[0.35em] text-paper-muted mt-0.5">
          Systems Architect
        </span>
      </div>
    </div>
  );
};

export default SignatureLogo;
