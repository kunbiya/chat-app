import {useEffect, useState} from 'react';
import {debounce} from 'lodash';

/*
  * 자바스크립트 내에서 모니터 사이즈를 사용하기 위한 유틸
  * 해상도 가로 사이즈를 측정하고, 모니터 사이즈를 return 합니다.
  * return values: 'web' | 'mobile'
*/
const useResize = () => {
    const [monitorSize, setMonitorSize] = useState<string>('');

    useEffect(() => {
        const measureWidth = () => {
            const currentWidth = window.innerWidth;
            if (currentWidth < 768) {
                return setMonitorSize('mobile');
            }
            setMonitorSize('web');
        };
        measureWidth();

        window.addEventListener('resize', debounce(measureWidth, 80));

        return () => window.removeEventListener('resize', measureWidth);
    }, []);

    return monitorSize;
}

export default useResize;
