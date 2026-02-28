/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

/**
 * AudioContext
 *
 * 글로벌 오디오 상태를 관리하는 Context.
 * 배경음악 재생/정지, 볼륨 조절, 인터랙션 사운드 재생을 제공한다.
 */
const AudioContext = createContext(null);

/**
 * AudioProvider 컴포넌트
 *
 * 앱 전체에서 오디오 상태를 공유하기 위한 Provider.
 * Howler.js를 사용하여 사운드를 관리한다.
 *
 * 동작 방식:
 * 1. Provider가 마운트되면 오디오 시스템이 초기화된다
 * 2. toggleBgm()으로 배경음악을 재생/정지할 수 있다
 * 3. playSound()로 일회성 효과음을 재생할 수 있다
 * 4. 언마운트 시 모든 사운드가 정리된다
 *
 * Props:
 * @param {ReactNode} children - 자식 컴포넌트 [Required]
 *
 * Example usage:
 * <AudioProvider>
 *   <App />
 * </AudioProvider>
 */
export function AudioProvider({ children }) {
  const [isMuted, setIsMuted] = useState(true);
  const bgmRef = useRef(null);

  /**
   * 배경음악 토글
   * isMuted 상태를 반전하고, Howl 인스턴스의 볼륨을 조절한다.
   */
  const toggleBgm = useCallback((src) => {
    if (!bgmRef.current && src) {
      bgmRef.current = new Howl({
        src: [src],
        loop: true,
        volume: 0.3,
      });
    }

    if (bgmRef.current) {
      if (isMuted) {
        bgmRef.current.play();
        setIsMuted(false);
      } else {
        bgmRef.current.pause();
        setIsMuted(true);
      }
    }
  }, [isMuted]);

  /**
   * 효과음 재생
   */
  const playSound = useCallback((src, volume = 0.5) => {
    if (isMuted) return;
    const sound = new Howl({
      src: [src],
      volume,
    });
    sound.play();
  }, [isMuted]);

  useEffect(() => {
    return () => {
      if (bgmRef.current) {
        bgmRef.current.stop();
        bgmRef.current.unload();
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ isMuted, toggleBgm, playSound }}>
      {children}
    </AudioContext.Provider>
  );
}

/**
 * useAudio 훅
 *
 * AudioProvider 내부에서 오디오 상태와 제어 함수에 접근하는 훅.
 *
 * @returns {{ isMuted: boolean, toggleBgm: function, playSound: function }}
 *
 * Example usage:
 * const { isMuted, toggleBgm } = useAudio();
 */
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    return { isMuted: true, toggleBgm: () => {}, playSound: () => {} };
  }
  return context;
}
