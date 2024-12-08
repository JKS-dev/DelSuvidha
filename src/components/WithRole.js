import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import useUserStore from '@/lib/userStore';
import { auth } from '@/lib/firebase';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
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
      return (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      );
    }

    if (!currentUser) {
      return (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuth;
};

export default withAuth;
