(function () {
    // Skip navbar when loaded inside an iframe (e.g., in trizlab4kids.html SPA)
    if (window.self !== window.top) {
        return; // Exit early if inside iframe
    }

    // Detect current language from URL path (/vi/ or /en/)
    const langMatch = window.location.pathname.match(/\/(vi|en)\//);
    const currentLang = langMatch ? langMatch[1] : 'vi';

    // Vietnamese principles data
    const principlesVI = [
        { id: 1, title: 'Phân nhỏ', file: 'index_01.html', summary: 'Chia vật lớn thành nhiều phần nhỏ.' },
        { id: 2, title: 'Tách khỏi', file: 'index_02.html', summary: 'Bỏ phần gây phiền phức đi.' },
        { id: 3, title: 'Phẩm chất cục bộ', file: 'index_03.html', summary: 'Làm một chỗ đặc biệt tốt.' },
        { id: 4, title: 'Phản đối xứng', file: 'index_04.html', summary: 'Để các mặt khác nhau để hoạt động tốt hơn.' },
        { id: 5, title: 'Kết hợp', file: 'index_05.html', summary: 'Gộp các thứ lại để làm việc cùng nhau.' },
        { id: 6, title: 'Vạn năng', file: 'index_06.html', summary: 'Một công cụ làm được nhiều việc.' },
        { id: 7, title: 'Chứa trong', file: 'index_07.html', summary: 'Đặt thứ này trong thứ kia để tiết kiệm chỗ.' },
        { id: 8, title: 'Phản trọng lượng', file: 'index_08.html', summary: 'Thêm trọng lượng bên kia để cân bằng.' },
        { id: 9, title: 'Gây ứng suất sơ bộ', file: 'index_09.html', summary: 'Đệm lót trước khi va chạm xảy ra.' },
        { id: 10, title: 'Thực hiện sơ bộ', file: 'index_10.html', summary: 'Chuẩn bị sớm để bắt đầu nhanh.' },
        { id: 11, title: 'Dự phòng', file: 'index_11.html', summary: 'Dùng đồ mềm để đỡ khi ngã.' },
        { id: 12, title: 'Đẳng thế', file: 'index_12.html', summary: 'Giữ đường đi phẳng và dễ dàng.' },
        { id: 13, title: 'Đảo ngược', file: 'index_13.html', summary: 'Lật ngược lại để có kết quả mới.' },
        { id: 14, title: 'Cầu (tròn) hóa', file: 'index_14.html', summary: 'Hình tròn trượt dễ và an toàn.' },
        { id: 15, title: 'Linh động', file: 'index_15.html', summary: 'Để nó điều chỉnh theo nhu cầu.' },
        { id: 16, title: 'Giải "thiếu" hoặc "thừa"', file: 'index_16.html', summary: 'Cố ý dùng ít hơn hoặc nhiều hơn một chút.' },
        { id: 17, title: 'Chuyển sang chiều khác', file: 'index_17.html', summary: 'Dùng không gian lên xuống, không chỉ phẳng.' },
        { id: 18, title: 'Sử dụng các dao động cơ học', file: 'index_18.html', summary: 'Lắc hoặc rung để giúp hoạt động.' },
        { id: 19, title: 'Tác động theo chu kỳ', file: 'index_19.html', summary: 'Đổi nỗ lực liên tục thành nhịp để tiết kiệm năng lượng.' },
        { id: 20, title: 'Liên tục tác động có ích', file: 'index_20.html', summary: 'Biến động tác ngắt quãng thành dòng chảy liên tục.' },
        { id: 21, title: '"Vượt nhanh"', file: 'index_21.html', summary: 'Bỏ qua bước chậm để tránh lãng phí.' },
        { id: 22, title: 'Biến hại thành lợi', file: 'index_22.html', summary: 'Biến điểm xấu thành điểm tốt.' },
        { id: 23, title: 'Quan hệ phản hồi', file: 'index_23.html', summary: 'Cảm nhận và thích nghi theo thời gian thực.' },
        { id: 24, title: 'Sử dụng trung gian', file: 'index_24.html', summary: 'Dùng lớp trung gian để kết nối các phần.' },
        { id: 25, title: 'Tự phục vụ', file: 'index_25.html', summary: 'Để hệ thống tự cung cấp những gì cần.' },
        { id: 26, title: 'Sao chép (copy)', file: 'index_26.html', summary: 'Sao chép khi bản gốc đắt hoặc rủi ro.' },
        { id: 27, title: '"Rẻ" thay cho "đắt"', file: 'index_27.html', summary: 'Dùng đồ rẻ, dùng một lần thay cho đồ quý.' },
        { id: 28, title: 'Thay thế sơ đồ cơ học', file: 'index_28.html', summary: 'Thay chuyển động vật lý bằng cảm biến hoặc tự động.' },
        { id: 29, title: 'Sử dụng các kết cấu khí và lỏng', file: 'index_29.html', summary: 'Dùng không khí hoặc chất lỏng để đệm hoặc tạo lực.' },
        { id: 30, title: 'Sử dụng vỏ dẻo và màng mỏng', file: 'index_30.html', summary: 'Bọc bằng lớp mềm để bảo vệ mà không cồng kềnh.' },
        { id: 31, title: 'Sử dụng vật liệu nhiều lỗ', file: 'index_31.html', summary: 'Thêm lỗ nhỏ để mọi thứ đi qua.' },
        { id: 32, title: 'Thay đổi màu sắc', file: 'index_32.html', summary: 'Dùng màu sắc để gửi thông điệp.' },
        { id: 33, title: 'Đồng nhất', file: 'index_33.html', summary: 'Làm từ cùng chất liệu để hoạt động cùng nhau.' },
        { id: 34, title: 'Phân hủy hoặc tái sinh các phần', file: 'index_34.html', summary: 'Dùng hết hoặc trả lại khi xong.' },
        { id: 35, title: 'Thay đổi các thông số hóa lý', file: 'index_35.html', summary: 'Thay đổi nhiệt độ, áp suất hoặc cài đặt khác.' },
        { id: 36, title: 'Sử dụng chuyển pha', file: 'index_36.html', summary: 'Dùng đông đặc, tan chảy hoặc sôi để hỗ trợ.' },
        { id: 37, title: 'Sử dụng sự nở nhiệt', file: 'index_37.html', summary: 'Nóng làm giãn ra; lạnh làm co lại.' },
        { id: 38, title: 'Sử dụng chất oxy hóa mạnh', file: 'index_38.html', summary: 'Dùng thêm oxy hoặc năng lượng cho phản ứng mạnh.' },
        { id: 39, title: 'Thay đổi độ trơ', file: 'index_39.html', summary: 'Dùng khí trơ để giữ an toàn và ổn định.' },
        { id: 40, title: 'Sử dụng vật liệu hợp thành', file: 'index_40.html', summary: 'Xếp lớp các vật liệu khác nhau để siêu bền.' },
    ];

    // English principles data
    const principlesEN = [
        { id: 1, title: 'Segmentation', file: 'index_01.html', summary: 'Break large objects into many small pieces.' },
        { id: 2, title: 'Taking Out', file: 'index_02.html', summary: 'Remove the problematic part and dispose of it.' },
        { id: 3, title: 'Local Quality', file: 'index_03.html', summary: 'Make one particular area very special.' },
        { id: 4, title: 'Asymmetry', file: 'index_04.html', summary: 'Have different sides work better together.' },
        { id: 5, title: 'Merging', file: 'index_05.html', summary: 'Combine things so they work together.' },
        { id: 6, title: 'Universality', file: 'index_06.html', summary: 'One tool that does many jobs.' },
        { id: 7, title: 'Nesting', file: 'index_07.html', summary: 'Put one thing inside another to save space.' },
        { id: 8, title: 'Counterweight', file: 'index_08.html', summary: 'Add weight on the other side to balance.' },
        { id: 9, title: 'Preliminary Tension', file: 'index_09.html', summary: 'Cushion first before impact happens.' },
        { id: 10, title: 'Preliminary Action', file: 'index_10.html', summary: 'Get ready early to start fast.' },
        { id: 11, title: 'Beforehand Cushioning', file: 'index_11.html', summary: 'Use soft materials to catch falls.' },
        { id: 12, title: 'Equipotentiality', file: 'index_12.html', summary: 'Keep the path flat and easy.' },
        { id: 13, title: 'The Opposite', file: 'index_13.html', summary: 'Flip it around to get new results.' },
        { id: 14, title: 'Spheroidality', file: 'index_14.html', summary: 'Round shapes slide easily and safely.' },
        { id: 15, title: 'Flexibility', file: 'index_15.html', summary: 'Let it adjust to what\'s needed.' },
        { id: 16, title: 'Partial or Overdone Action', file: 'index_16.html', summary: 'Purposely use too little or a bit too much.' },
        { id: 17, title: 'Moving to a New Dimension', file: 'index_17.html', summary: 'Use up and down space, not just flat.' },
        { id: 18, title: 'Mechanical Vibration', file: 'index_18.html', summary: 'Shake or vibrate to help it work.' },
        { id: 19, title: 'Periodic Action', file: 'index_19.html', summary: 'Change continuous effort to rhythm to save energy.' },
        { id: 20, title: 'Continuity of Useful Action', file: 'index_20.html', summary: 'Turn stop-and-go action into continuous flow.' },
        { id: 21, title: 'Rushing Through', file: 'index_21.html', summary: 'Skip slow steps to avoid waste.' },
        { id: 22, title: 'Convert Harm into Benefit', file: 'index_22.html', summary: 'Turn a bad point into a good point.' },
        { id: 23, title: 'Feedback', file: 'index_23.html', summary: 'Sense and adjust in real time.' },
        { id: 24, title: 'Intermediary', file: 'index_24.html', summary: 'Use an intermediate layer to connect parts.' },
        { id: 25, title: 'Self-Service', file: 'index_25.html', summary: 'Let the system provide what it needs.' },
        { id: 26, title: 'Copying', file: 'index_26.html', summary: 'Copy when the original is expensive or risky.' },
        { id: 27, title: 'Cheap Short-Living', file: 'index_27.html', summary: 'Use disposable cheap items instead of expensive ones.' },
        { id: 28, title: 'Mechanics Substitution', file: 'index_28.html', summary: 'Replace physical motion with sensors or automation.' },
        { id: 29, title: 'Pneumatics and Hydraulics', file: 'index_29.html', summary: 'Use air or liquid to cushion or create force.' },
        { id: 30, title: 'Flexible Shells and Thin Films', file: 'index_30.html', summary: 'Wrap with soft layers to protect without bulk.' },
        { id: 31, title: 'Porous Materials', file: 'index_31.html', summary: 'Add small holes so things pass through.' },
        { id: 32, title: 'Color Changes', file: 'index_32.html', summary: 'Use colors to send messages.' },
        { id: 33, title: 'Homogeneity', file: 'index_33.html', summary: 'Make from the same material to work together.' },
        { id: 34, title: 'Discarding and Recovering', file: 'index_34.html', summary: 'Use it all up or recycle when done.' },
        { id: 35, title: 'Parameter Changes', file: 'index_35.html', summary: 'Change temperature, pressure, or other settings.' },
        { id: 36, title: 'Phase Transition', file: 'index_36.html', summary: 'Use freezing, melting, or boiling to help.' },
        { id: 37, title: 'Thermal Expansion', file: 'index_37.html', summary: 'Heat makes things expand; cold makes them shrink.' },
        { id: 38, title: 'Accelerated Oxidation', file: 'index_38.html', summary: 'Add more oxygen or energy for strong reaction.' },
        { id: 39, title: 'Inert Atmosphere', file: 'index_39.html', summary: 'Use inert gas to stay safe and stable.' },
        { id: 40, title: 'Composite Materials', file: 'index_40.html', summary: 'Layer different materials together to be super strong.' },
    ];

    // Select principles based on language
    const principles = currentLang === 'en' ? principlesEN : principlesVI;

    const match = window.location.pathname.match(/index_(\d+)\.html$/);
    const currentId = match ? Number(match[1]) : null;
    const currentIndex = principles.findIndex((item) => item.id === currentId);
    const current = currentIndex >= 0 ? principles[currentIndex] : null;
    const prev = currentIndex > 0 ? principles[currentIndex - 1] : null;
    const next = currentIndex >= 0 && currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null;

    function createNav() {
        if (document.querySelector('.triz-nav')) return;

        const nav = document.createElement('nav');
        nav.className = 'triz-nav';

        const chips = principles
            .map((item) => {
                const isActive = item.id === currentId;
                const classes = ['nav-chip', isActive ? 'active' : ''].filter(Boolean).join(' ');
                return `<a class="${classes}" href="${item.file}"><strong>${item.id}</strong><span>${item.title}</span></a>`;
            })
            .join('');

        nav.innerHTML = `
            <div class="nav-top">
                <div class="nav-brand">TRIZ Lab · 1-40</div>
                <div class="nav-search">
                    <input type="text" id="triz-search" placeholder="🔍 Tìm nguyên lý..." />
                </div>
            </div>
            <div class="nav-grid">
                ${chips}
            </div>
        `;

        document.body.insertBefore(nav, document.body.firstChild);
    }

    function createSummaryCard() {
        if (!current || document.querySelector('.principle-summary')) return;

        const card = document.createElement('section');
        card.className = 'principle-summary';

        card.innerHTML = `
            <div class="pill">Nguyên tắc ${current.id}</div>
            <div>
                <h2>${current.title}</h2>
                <p>${current.summary}</p>
            </div>
        `;

        const nav = document.querySelector('.triz-nav');
        if (nav) {
            nav.insertAdjacentElement('afterend', card);
        } else {
            document.body.insertBefore(card, document.body.firstChild);
        }
    }

    function setupSearch() {
        const searchInput = document.getElementById('triz-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const chips = document.querySelectorAll('.nav-chip');

            chips.forEach((chip, index) => {
                const principle = principles[index];
                const searchText = `${principle.id} ${principle.title} ${principle.summary}`.toLowerCase();

                if (query === '' || searchText.includes(query)) {
                    chip.style.display = '';
                    chip.style.opacity = '1';
                } else {
                    chip.style.display = 'none';
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        createNav();
        createSummaryCard();
        setupSearch();
    });
})();
