import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import useUserStore from '@/app/lib/userStore';
import { auth } from '@/app/lib/firebase';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { currentUser, isLoading, fetchUserInfo } = useUserStore();

    useEffect(() => {
      const unSub = onAuthStateChanged(auth, (user) => {
        fetchUserInfo(user?.uid);
        if (!user) {
          router.push('/login');
        }
      });

      return () => {
        unSub();
      };
    }, [fetchUserInfo, router]);
    
    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login');
      } catch (error) {
        console.error('Failed to logout:', error);
      }
    };

    if (isLoading) {
      return <div className="loading">
        <div class="spinner"></div>
      </div>;
    }

    if (!currentUser) {
      return <div className="loading"><div class="Spinner"></div></div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
