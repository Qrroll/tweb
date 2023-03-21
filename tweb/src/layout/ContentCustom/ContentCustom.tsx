import React from "react";
import {Layout, theme} from "antd";
const { Content } = Layout;
const ContentCustom = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <p>
                    Соображения высшего порядка, а также дальнейшее развитие различных форм
                    деятельности требует от нас системного анализа модели развития. Равным
                    образом консультация с профессионалами из IT играет важную роль в
                    формировании ключевых компонентов планируемого обновления. С другой
                    стороны новая модель организационной деятельности обеспечивает широкому
                    кругу специалистов участие в формировании модели развития!
                </p>
                <p>
                    Разнообразный и богатый опыт повышение уровня гражданского сознания
                    представляет собой интересный эксперимент проверки системы обучения кадров,
                    соответствующей насущным потребностям! С другой стороны начало повседневной
                    работы по формированию позиции играет важную роль в формировании позиций,
                    занимаемых участниками в отношении поставленных задач? Соображения высшего
                    порядка, а также дальнейшее развитие различных форм деятельности позволяет
                    выполнить важнейшие задания по разработке модели развития. Значимость этих
                    проблем настолько очевидна, что постоянный количественный рост и сфера нашей
                    активности в значительной степени обуславливает создание дальнейших направлений
                    развитая системы массового участия.
                </p>
                <p>
                    Дорогие друзья, постоянный количественный рост и сфера нашей активности играет
                    важную роль в формировании дальнейших направлений развитая системы массового участия!
                </p>
                <p>
                    Не следует, однако, забывать о том, что реализация намеченного плана развития
                    позволяет выполнить важнейшие задания по разработке системы масштабного изменения
                    ряда параметров! Повседневная практика показывает, что постоянный количественный
                    рост и сфера нашей активности играет важную роль в формировании системы обучения
                    кадров, соответствующей насущным потребностям? Таким образом, социально-экономическое развитие требует...
                </p>
            </div>
        </Content>
    )
}
export default ContentCustom