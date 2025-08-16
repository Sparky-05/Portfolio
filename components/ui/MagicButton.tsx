import React, { ReactNode } from 'react';

type MagicButtonProps = {
  Child: ReactNode;
  Child2?: ReactNode;
};

const MagicButton = ({ Child, Child2 }: MagicButtonProps) => {
  return (
    <div className="w-full flex justify-center mt-8 between0_467:mt-4">
      <button className="relative inline-flex h-12 w-52 overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          {Child} {Child2}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
