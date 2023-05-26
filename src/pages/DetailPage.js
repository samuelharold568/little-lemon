import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Center } from '@chakra-ui/react';
import { detailMenu } from '../utils/endpoint';
import DetailMenu from '../component/DetailMenu';
import delivery from '../icons_assets/motorbike.png';
import Load from '../component/Load';

function DetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getDetail() {
      const { data } = await detailMenu(Number(id));

      if (data) {
        setDetail(data);
        setLoad(false);
      }
    }

    getDetail();
  }, [id]);

  return (
    <Stack w="100%" h="90vh" bg="#495E57">
      <Center w="100%" h="100%">
        {
          load ? <Load />
            : (
              <DetailMenu
                img={detail[0].strMealThumb}
                title={detail[0].strMeal}
                icon={delivery}
              />
            )
        }
      </Center>
    </Stack>
  );
}

export default DetailPage;
