var e={old:{fs:`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
uniform sampler2D g_tLayerMask_s0;
uniform sampler2D g_tLayerMask_s3;
uniform sampler2D g_tNoise_s1;
uniform sampler2D g_tNormal_s1;
uniform sampler2D g_tPattern_s3;
uniform sampler2D g_tSurface_s3;
uniform sampler2DArray g_tDamageNormal_s3;
uniform sampler2DArray g_tDetailNormal_s3;
uniform sampler2DArray g_tDetail_s3;
uniform sampler2DArray g_tGrunge_s3;
const vec3 _1329[9] = vec3[](vec3(0.0, 0.0, 0.31972789764404296875), vec3(-1.0, -1.0, 0.051020406186580657958984375), vec3(-1.0, 0.0, 0.119047619402408599853515625), vec3(-1.0, 1.0, 0.051020406186580657958984375), vec3(0.0, -1.0, 0.119047619402408599853515625), vec3(0.0, 1.0, 0.119047619402408599853515625), vec3(1.0, -1.0, 0.051020406186580657958984375), vec3(1.0, 0.0, 0.119047619402408599853515625), vec3(1.0, 1.0, 0.051020406186580657958984375));
const vec2 _592[4] = vec2[](vec2(-1.0), vec2(-1.0, 1.0), vec2(1.0), vec2(1.0, -1.0));
vec3 _2;

uniform int g_bPattern;
uniform float g_flSheenScale;
uniform int g_nOutputMode;
uniform vec3 g_vTextileAlbedoLevels;
uniform vec3 g_vMetallicTextileAlbedoLevels;
uniform vec4 g_vGrungeTexCoordXform0;
uniform vec4 g_vGrungeTexCoordXform1;
uniform vec4 g_vGrungeTexRotationXform0;
uniform vec4 g_vGrungeTexRotationXform1;
uniform float g_fWearProgress;
uniform float g_fDetailBlackPoint1;
uniform float g_fDetailBlackPointCompensation1;
uniform float g_fDetailScale1;
uniform float g_fDetailRoughnessContrast1;
uniform float g_fDetailRoughnessBrightness1;
uniform float g_fDetailMetalness1;
uniform float g_fDetailCloth1;
uniform float g_fDetailNormalContrast1;
uniform vec2 g_vDamageLevels1;
uniform float g_fDamageRoughnessContrast1;
uniform float g_fDamageRoughnessBrightness1;
uniform float g_fDamageSaturation1;
uniform float g_fDamageBrightness1;
uniform float g_fDamageMetalness1;
uniform float g_fDamageCloth1;
uniform float g_fDamageBleaching1;
uniform float g_fCurvaturePower1;
uniform float g_fCurvatureWearBoost1;
uniform float g_fDamageNormalEdgeWidth1;
uniform float g_fDamageEdgeRoughness1;
uniform float g_fDamageEdgeMetalness1;
uniform float g_fDetailGrunge1;
uniform float g_fGrungeMax1;
uniform float g_fGrungeRoughnessBrightness1;
uniform float g_fWearBleaching1;
uniform float g_fGrimeSaturation1;
uniform float g_fGrimeBrightness1;
uniform float g_fColorMaskBlur;
uniform float g_fFlipFixup;
uniform vec4 g_vPatternTexCoordXform0;
uniform vec4 g_vPatternTexCoordXform1;
uniform vec4 g_vPatternTexRotationXform0;
uniform vec4 g_vPatternTexRotationXform1;
uniform float g_fPatternRoughnessBrightness;
uniform float g_fPatternMetalness;
uniform float g_fPaintThickness;
uniform float g_fPaintDurability;
uniform float g_fPaintShadowPower;
uniform float g_fPatternDetailInfluence;
uniform int g_nPatternReplaceIndex;
uniform int g_nPatternMode;
uniform vec3 g_vColorTint1;
uniform vec3 g_vColorTint2;
uniform vec3 g_vColorTint3;
uniform vec3 g_vColorTint4;
uniform vec3 g_vColorTint5;
uniform vec3 g_vColorTint6;
uniform vec3 g_vColorTint7;
uniform vec3 g_vColorTint8;
uniform ivec4 g_vPatternPaletteIndices;
uniform float g_fDetailBlackPoint2;
uniform float g_fDetailBlackPointCompensation2;
uniform float g_fDetailScale2;
uniform float g_fDetailRoughnessContrast2;
uniform float g_fDetailRoughnessBrightness2;
uniform float g_fDetailMetalness2;
uniform float g_fDetailCloth2;
uniform float g_fDetailNormalContrast2;
uniform vec2 g_vDamageLevels2;
uniform float g_fDamageRoughnessContrast2;
uniform float g_fDamageRoughnessBrightness2;
uniform float g_fDamageSaturation2;
uniform float g_fDamageBrightness2;
uniform float g_fDamageMetalness2;
uniform float g_fDamageCloth2;
uniform float g_fDamageBleaching2;
uniform float g_fCurvaturePower2;
uniform float g_fCurvatureWearBoost2;
uniform float g_fDamageNormalEdgeWidth2;
uniform float g_fDamageEdgeRoughness2;
uniform float g_fDamageEdgeMetalness2;
uniform float g_fDetailGrunge2;
uniform float g_fGrungeMax2;
uniform float g_fGrungeRoughnessBrightness2;
uniform float g_fWearBleaching2;
uniform float g_fGrimeSaturation2;
uniform float g_fGrimeBrightness2;
uniform float g_fDetailBlackPoint3;
uniform float g_fDetailBlackPointCompensation3;
uniform float g_fDetailScale3;
uniform float g_fDetailRoughnessContrast3;
uniform float g_fDetailRoughnessBrightness3;
uniform float g_fDetailMetalness3;
uniform float g_fDetailCloth3;
uniform float g_fDetailNormalContrast3;
uniform vec2 g_vDamageLevels3;
uniform float g_fDamageRoughnessContrast3;
uniform float g_fDamageRoughnessBrightness3;
uniform float g_fDamageSaturation3;
uniform float g_fDamageBrightness3;
uniform float g_fDamageMetalness3;
uniform float g_fDamageCloth3;
uniform float g_fDamageBleaching3;
uniform float g_fCurvaturePower3;
uniform float g_fCurvatureWearBoost3;
uniform float g_fDamageNormalEdgeWidth3;
uniform float g_fDamageEdgeRoughness3;
uniform float g_fDamageEdgeMetalness3;
uniform float g_fDetailGrunge3;
uniform float g_fGrungeMax3;
uniform float g_fGrungeRoughnessBrightness3;
uniform float g_fWearBleaching3;
uniform float g_fGrimeSaturation3;
uniform float g_fGrimeBrightness3;
uniform float g_fDetailBlackPoint4;
uniform float g_fDetailBlackPointCompensation4;
uniform float g_fDetailScale4;
uniform float g_fDetailRoughnessContrast4;
uniform float g_fDetailRoughnessBrightness4;
uniform float g_fDetailMetalness4;
uniform float g_fDetailCloth4;
uniform float g_fDetailNormalContrast4;
uniform vec2 g_vDamageLevels4;
uniform float g_fDamageRoughnessContrast4;
uniform float g_fDamageRoughnessBrightness4;
uniform float g_fDamageSaturation4;
uniform float g_fDamageBrightness4;
uniform float g_fDamageMetalness4;
uniform float g_fDamageCloth4;
uniform float g_fDamageBleaching4;
uniform float g_fCurvaturePower4;
uniform float g_fCurvatureWearBoost4;
uniform float g_fDamageNormalEdgeWidth4;
uniform float g_fDamageEdgeRoughness4;
uniform float g_fDamageEdgeMetalness4;
uniform float g_fDetailGrunge4;
uniform float g_fGrungeMax4;
uniform float g_fGrungeRoughnessBrightness4;
uniform float g_fWearBleaching4;
uniform float g_fGrimeSaturation4;
uniform float g_fGrimeBrightness4;


in vec4 vIn0;
out vec4 outColor;

void main()
{
    vec2 _13810 = vIn0.xy;
    vec4 _21836 = texture(g_tLayerMask_s3, vIn0.xy);
    float _13915 = _21836.x;
    float _21941 = _21836.y;
    float _24699 = _21836.z;
    float _22165 = mix(mix(mix(g_fDetailMetalness1, g_fDetailMetalness2, _13915), g_fDetailMetalness3, _21941), g_fDetailMetalness4, _24699);
    vec2 _8506 = vec2(_13915);
    vec2 _14169 = vec2(_21941);
    vec2 _13884 = vec2(_24699);
    vec2 _7502 = mix(mix(mix(g_vDamageLevels1, g_vDamageLevels2, _8506), g_vDamageLevels3, _14169), g_vDamageLevels4, _13884);
    float _22168 = mix(mix(mix(g_fDamageSaturation1, g_fDamageSaturation2, _13915), g_fDamageSaturation3, _21941), g_fDamageSaturation4, _24699);
    float _22171 = mix(mix(mix(g_fDamageNormalEdgeWidth1, g_fDamageNormalEdgeWidth2, _13915), g_fDamageNormalEdgeWidth3, _21941), g_fDamageNormalEdgeWidth4, _24699);
    float _22174 = mix(mix(mix(g_fDetailGrunge1, g_fDetailGrunge2, _13915), g_fDetailGrunge3, _21941), g_fDetailGrunge4, _24699);
    float _22177 = mix(mix(mix(g_fGrimeSaturation1, g_fGrimeSaturation2, _13915), g_fGrimeSaturation3, _21941), g_fGrimeSaturation4, _24699);
    vec2 _22248 = _13810;
    _22248.x = vIn0.x * g_fFlipFixup;
    vec4 _18992 = texture(g_tSurface_s3, vIn0.xy);
    float _18168 = _18992.x;
    float _14997 = pow(_18168, mix(mix(mix(g_fCurvaturePower1, g_fCurvaturePower2, _13915), g_fCurvaturePower3, _21941), g_fCurvaturePower4, _24699));
    float _20235 = _18992.y;
    float _24805 = _18992.z;
    float _22201 = _18992.w;
    vec2 _22630 = (_13810 * mix(mix(mix(g_fDetailScale1, g_fDetailScale2, _13915), g_fDetailScale3, _21941), g_fDetailScale4, _24699)).xy;
    vec4 _19414 = texture(g_tDetail_s3, vec3(_22630, 0.0));
    vec2 _14800 = vec2(g_fDetailBlackPoint1);
    vec2 _7443 = _14800 + (_19414.xy * g_fDetailBlackPointCompensation1);
    vec4 _20488 = _19414;
    _20488.x = _7443.x;
    _20488.y = _7443.y;
    vec4 _19415 = texture(g_tDetail_s3, vec3(_22630, 1.0));
    vec2 _7444 = vec2(g_fDetailBlackPoint2) + (_19415.xy * g_fDetailBlackPointCompensation2);
    vec4 _20489 = _19415;
    _20489.x = _7444.x;
    _20489.y = _7444.y;
    vec4 _19416 = texture(g_tDetail_s3, vec3(_22630, 2.0));
    vec2 _7445 = vec2(g_fDetailBlackPoint3) + (_19416.xy * g_fDetailBlackPointCompensation3);
    vec4 _20490 = _19416;
    _20490.x = _7445.x;
    _20490.y = _7445.y;
    vec4 _19417 = texture(g_tDetail_s3, vec3(_22630, 3.0));
    vec2 _7446 = vec2(g_fDetailBlackPoint4) + (_19417.xy * g_fDetailBlackPointCompensation4);
    vec4 _20491 = _19417;
    _20491.x = _7446.x;
    _20491.y = _7446.y;
    vec4 _21174 = vec4(_13915);
    vec4 _14170 = vec4(_21941);
    vec4 _14150 = vec4(_24699);
    vec4 _6543 = mix(mix(mix(_20488.xyzw, _20489.xyzw, _21174), _20490.xyzw, _14170), _20491.xyzw, _14150);
    vec2 _24074 = _14800 + (_6543.xy * g_fDetailBlackPointCompensation1);
    float _10152 = _24074.x;
    float _10579 = _24074.y;
    float _14189 = _6543.z;
    vec2 _23217 = vec2(dot(_22248.xy, g_vPatternTexCoordXform0.xy) + g_vPatternTexCoordXform0.w, dot(_22248.xy, g_vPatternTexCoordXform1.xy) + g_vPatternTexCoordXform1.w) + vec2((((_10579 * 2.0) - 1.0) * 0.0009765625) * g_fPatternDetailInfluence);
    _23217.x = _23217.x * ((vIn0.x < 0.0) ? (-1.0) : 1.0);
    float _21717 = 1.0 - _6543.w;
    float _7730 = clamp(((mix(mix(mix(g_fDetailRoughnessContrast1, g_fDetailRoughnessContrast2, _13915), g_fDetailRoughnessContrast3, _21941), g_fDetailRoughnessContrast4, _24699) * (((_21717 * _21717) * 0.85000002384185791015625) + (-0.3499999940395355224609375))) + 0.5) * mix(mix(mix(g_fDetailRoughnessBrightness1, g_fDetailRoughnessBrightness2, _13915), g_fDetailRoughnessBrightness3, _21941), g_fDetailRoughnessBrightness4, _24699), 0.0, 1.0);
    float _17411 = 1.0 - _10152;
    vec2 _15902 = vec2(dot(_13810, g_vGrungeTexCoordXform0.xy) + g_vGrungeTexCoordXform0.w, dot(_13810, g_vGrungeTexCoordXform1.xy) + g_vGrungeTexCoordXform1.w).xy;
    vec4 _19338 = texture(g_tGrunge_s3, vec3(_15902, 0.0));
    vec4 _19339 = texture(g_tGrunge_s3, vec3(_15902, 1.0));
    vec4 _19340 = texture(g_tGrunge_s3, vec3(_15902, 2.0));
    vec4 _18453 = texture(g_tGrunge_s3, vec3(_15902, 3.0));
    vec4 _19739 = mix(mix(mix(_19338.xyzw, _19339.xyzw, _21174), _19340.xyzw, _14170), _18453.xyzw, _14150);
    vec3 _12690 = _19739.xyz;
    float _17907 = dot(_12690, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    vec4 _22452 = texture(g_tNoise_s1, (_13810 * 2.0).xy);
    vec4 _19372 = texture(g_tNormal_s1, vIn0.xy);
    float _16000 = _19372.x;
    float _19720 = _19372.y;
    float _16783 = (_16000 + _19720) - 1.00392162799835205078125;
    float _11176 = _16000 - _19720;
    vec3 _17934 = normalize(vec3(vec2(_16783, _11176), (1.0 - abs(_16783)) - abs(_11176)));
    vec4 _19341 = texture(g_tDetailNormal_s3, vec3(_22630, 0.0));
    vec4 _19342 = texture(g_tDetailNormal_s3, vec3(_22630, 1.0));
    vec4 _19343 = texture(g_tDetailNormal_s3, vec3(_22630, 2.0));
    vec4 _18454 = texture(g_tDetailNormal_s3, vec3(_22630, 3.0));
    vec2 _19777 = mix(mix(mix(_19341.xy, _19342.xy, _8506), _19343.xy, _14169), _18454.xy, _13884);
    float _22845 = _19777.x;
    float _18662 = _19777.y;
    float _16784 = (_22845 + _18662) - 1.00392162799835205078125;
    float _11177 = _22845 - _18662;
    vec3 _17935 = normalize(vec3(vec2(_16784, _11177), (1.0 - abs(_16784)) - abs(_11177)));
    vec4 _19344 = texture(g_tDamageNormal_s3, vec3(_22630, 0.0));
    vec4 _19345 = texture(g_tDamageNormal_s3, vec3(_22630, 1.0));
    vec4 _19346 = texture(g_tDamageNormal_s3, vec3(_22630, 2.0));
    vec4 _18455 = texture(g_tDamageNormal_s3, vec3(_22630, 3.0));
    vec2 _19778 = mix(mix(mix(_19344.xy, _19345.xy, _8506), _19346.xy, _14169), _18455.xy, _13884);
    float _22846 = _19778.x;
    float _18663 = _19778.y;
    float _16785 = (_22846 + _18663) - 1.00392162799835205078125;
    float _11178 = _22846 - _18663;
    float _16408[8] = float[](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    int _21567;
    int _13039 = 0;
    for (;;)
    {
        if (!(_13039 < 9))
        {
            break;
        }
        vec4 _22564 = texture(g_tLayerMask_s0, (_13810 + ((_1329[_13039].xy * 0.0009765625) * g_fColorMaskBlur)).xy);
        float _8268 = _22564.w;
        int _23989;
        int _13040 = 0;
        for (;;)
        {
            if (!(_13040 < 8))
            {
                break;
            }
            if (float(_13040) == floor(_8268 * 8.0))
            {
                _16408[_13040] += _1329[_13039].z;
            }
            _23989 = _13040 + 1;
            _13040 = _23989;
            continue;
        }
        _21567 = _13039 + 1;
        _13039 = _21567;
        continue;
    }
    bool _14874 = g_bPattern != 0;
    vec3 _12724;
    float _13137;
    float _16306;
    float _17117;
    vec3 _17118;
    float _17119;
    float _17120;
    float _17121;
    float _23554;
    if (_14874)
    {
        bool _12885;
        if (g_nPatternMode == 1)
        {
            _12885 = true;
        }
        else
        {
            _12885 = g_nPatternMode == 3;
        }
        float _19287;
        if (_12885)
        {
            _19287 = 1.0;
        }
        else
        {
            _19287 = _16408[g_nPatternReplaceIndex];
        }
        vec4 _21760 = texture(g_tPattern_s3, _23217.xy);
        vec3 _16442[8] = vec3[](g_vColorTint1, g_vColorTint2, g_vColorTint3, g_vColorTint4, g_vColorTint5, g_vColorTint6, g_vColorTint7, g_vColorTint8);
        float _6616;
        float _13136;
        vec3 _13694;
        float _16305;
        vec3 _17114;
        float _17115;
        float _17116;
        if (g_nPatternMode < 2)
        {
            float _13819 = _21760.x;
            float _19482 = _21760.y;
            float _19483 = _21760.z;
            float _9865 = (_13819 + _19482) + _19483;
            float _10776;
            if (g_fPaintThickness > 0.0)
            {
                vec4 _20322 = texture(g_tPattern_s3, _23217.xy, 0.5 + (0.100000001490116119384765625 * g_fPaintThickness));
                _10776 = pow(mix(1.0, (mix(pow(1.0 - _20322.x, g_fPaintShadowPower), 1.0, _13819) * mix(pow(1.0 - _20322.y, g_fPaintShadowPower), 1.0, _19482)) * mix(pow(1.0 - _20322.z, g_fPaintShadowPower), 1.0, _19483), _19287), 0.20000000298023223876953125);
            }
            else
            {
                _10776 = 1.0;
            }
            float _16230 = (clamp(_9865, 0.0, 1.0) * _19287) * clamp(g_fPaintThickness - (_14189 * pow(g_fWearProgress, 4.0)), 0.0, 1.0);
            float _21772 = _16230 * min(1.0, g_fPaintThickness);
            _13136 = _22201 - (_21772 * g_fPaintDurability);
            _16305 = mix(_10579, 0.5, _16230);
            _17114 = mix(_17935, vec3(0.0, 0.0, 1.0), vec3(_21772));
            _17115 = _9865 * g_fPaintThickness;
            _17116 = _10776;
            _13694 = mix(mix(mix(_16442[g_vPatternPaletteIndices.x - 1], _16442[g_vPatternPaletteIndices.y - 1], vec3(_13819)), _16442[g_vPatternPaletteIndices.z - 1], vec3(_19482)), _16442[g_vPatternPaletteIndices.w - 1], vec3(_19483));
            _6616 = _7730 * mix(1.0, g_fPatternRoughnessBrightness, _21772);
        }
        else
        {
            _13136 = _22201;
            _16305 = _10579;
            _17114 = _17935;
            _17115 = 1.0;
            _17116 = 1.0;
            _13694 = _21760.xyz;
            _6616 = _7730;
        }
        _13137 = mix(_22165, g_fPatternMetalness, _19287);
        _16306 = _13136;
        _17117 = _16305;
        _17118 = _17114;
        _17119 = _19287;
        _17120 = _17115;
        _17121 = _17116;
        _12724 = _13694;
        _23554 = _6616;
    }
    else
    {
        _13137 = _22165;
        _16306 = _22201;
        _17117 = _10579;
        _17118 = _17935;
        _17119 = 1.0;
        _17120 = 1.0;
        _17121 = 1.0;
        _12724 = vec3(0.0);
        _23554 = _7730;
    }
    vec3 _23805 = (((((((g_vColorTint1 * _16408[0]) + (g_vColorTint2 * _16408[1])) + (g_vColorTint3 * _16408[2])) + (g_vColorTint4 * _16408[3])) + (g_vColorTint5 * _16408[4])) + (g_vColorTint6 * _16408[5])) + (g_vColorTint7 * _16408[6])) + (g_vColorTint8 * _16408[7]);
    vec3 _18530 = _23805.xyz;
    vec3 _14602 = _18530 * vec3(0.077399380505084991455078125);
    vec3 _7676 = pow((_18530 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
    float _21354;
    if (_23805.x <= 0.040449999272823333740234375)
    {
        _21354 = _14602.x;
    }
    else
    {
        _21354 = _7676.x;
    }
    float _21355;
    if (_23805.y <= 0.040449999272823333740234375)
    {
        _21355 = _14602.y;
    }
    else
    {
        _21355 = _7676.y;
    }
    float _19456;
    if (_23805.z <= 0.040449999272823333740234375)
    {
        _19456 = _14602.z;
    }
    else
    {
        _19456 = _7676.z;
    }
    vec3 _15471 = vec3(_21354, _21355, _19456);
    vec3 _10597 = _12724.xyz * vec3(0.077399380505084991455078125);
    vec3 _7677 = pow((_12724.xyz * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
    float _21356;
    if (_12724.x <= 0.040449999272823333740234375)
    {
        _21356 = _10597.x;
    }
    else
    {
        _21356 = _7677.x;
    }
    float _21357;
    if (_12724.y <= 0.040449999272823333740234375)
    {
        _21357 = _10597.y;
    }
    else
    {
        _21357 = _7677.y;
    }
    float _20482;
    if (_12724.z <= 0.040449999272823333740234375)
    {
        _20482 = _10597.z;
    }
    else
    {
        _20482 = _7677.z;
    }
    float _11428 = _14997 * _16306;
    float _20765 = mix(mix(mix(g_fCurvatureWearBoost1, g_fCurvatureWearBoost2, _13915), g_fCurvatureWearBoost3, _21941), g_fCurvatureWearBoost4, _24699) * _14997;
    float _12034 = clamp((_11428 * _19739.w) + _20765, 0.0, 1.0);
    float _22935 = _7502.x;
    float _11001 = _7502.y;
    float _19034 = smoothstep(_22935, _11001, _12034 * g_fWearProgress);
    float _9410 = 1.0 - _19034;
    float _17292 = clamp(_19034 + ((clamp(smoothstep(_22935, _11001, _12034 * (g_fWearProgress * 4.0)), 0.0, 1.0) * _9410) * _14189), 0.0, 1.0);
    vec3 _20940;
    if (_14874)
    {
        _20940 = mix(_15471, mix(vec3(_21356, _21357, _20482), _15471, vec3(_17292)), vec3(_17119));
    }
    else
    {
        _20940 = _15471;
    }
    float _23685 = dot(_20940.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    float _11002 = _17117 * _14997;
    float _11013 = dFdx(_11002);
    float _11026 = dFdy(_11002);
    float _14908 = dFdx(_11002);
    float _23784 = dFdy(_11002);
    float _16103 = _10152 * _14997;
    float _15058 = dFdx(_16103);
    float _11027 = dFdy(_16103);
    float _14909 = dFdx(_16103);
    float _23785 = dFdy(_16103);
    float _22514 = (_18168 + _20235) + _24805;
    float _17067 = dFdx(_22514);
    float _22105 = dFdy(_22514);
    vec3 _18056 = max(_20940, _20940 * (1.0 + (_14997 * 0.5)));
    float _19227 = min(1.0, mix(_17117, _10152, _17292) + ((mix(((1.0 - abs(_11013)) * (1.0 - abs(_11026))) * clamp(abs(_14908) + abs(_23784), 0.0, 1.0), ((1.0 - abs(_15058)) * (1.0 - abs(_11027))) * clamp(abs(_14909) + abs(_23785), 0.0, 1.0), _19034) * (1.0 - clamp(abs(_17067), 0.0, 1.0))) * (1.0 - clamp(abs(_22105), 0.0, 1.0))));
    float _9287 = dot(vec4(_19227).xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    vec3 _9577 = normalize(max(_18056.xyz, vec3(0.001000000047497451305389404296875)));
    vec3 _10951 = clamp((_9577 * min(_9287 / dot(_9577.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125)), (3.0 * _9287) * max(_18056.x, max(_18056.y, _18056.z)))).xyz, vec3(0.0), vec3(1.0));
    float _15624 = mix(((g_fWearProgress * _24805) * mix(mix(mix(g_fWearBleaching1, g_fWearBleaching2, _13915), g_fWearBleaching3, _21941), g_fWearBleaching4, _24699)) * mix(_14189, 0.0, clamp(_17120 - 1.0, 0.0, 1.0)), mix(mix(mix(g_fDamageBleaching1, g_fDamageBleaching2, _13915), g_fDamageBleaching3, _21941), g_fDamageBleaching4, _24699), _19034);
    vec3 _10558;
    do
    {
        if (_22177 > 0.0)
        {
            vec3 _22572 = normalize(_12690 * _17907).xyz - vec3(0.57700002193450927734375);
            vec3 _7057 = clamp((normalize(_22572) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
            vec3 _15712 = _7057 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
            _10558 = mix(_12690, _7057 * (_17907 / ((_15712.x + _15712.y) + _15712.z)), vec3(clamp(_22177 * pow(abs(dot(_22572, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0)));
            break;
        }
        else
        {
            _10558 = mix(_12690, vec3(_17907), vec3(-_22177));
            break;
        }
        break; // unreachable workaround
    } while(false);
    vec3 _23869 = (_10951 * _12690) * 2.0;
    vec3 _16559 = mix(mix(_10951, _23869, vec3((_22174 * (1.0 + (g_fWearProgress * _22174))) * _9410)), (_10558 * (1.0 + mix(mix(mix(g_fGrimeBrightness1, g_fGrimeBrightness2, _13915), g_fGrimeBrightness3, _21941), g_fGrimeBrightness4, _24699))) * _19227, vec3(_15624));
    vec3 _9452 = _16559.xyz;
    vec3 _10559;
    do
    {
        if (_22168 > 0.0)
        {
            vec3 _22573 = normalize(_20940.xyz * dot(_20940.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))).xyz - vec3(0.57700002193450927734375);
            vec3 _7058 = clamp((normalize(_22573) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
            vec3 _15713 = _7058 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
            _10559 = mix(_9452, _7058 * (dot(_9452, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125)) / ((_15713.x + _15713.y) + _15713.z)), vec3(clamp(_22168 * pow(abs(dot(_22573, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0)));
            break;
        }
        else
        {
            _10559 = mix(_9452, vec3(dot(_16559.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))), vec3(-_22168));
            break;
        }
        break; // unreachable workaround
    } while(false);
    vec3 _19489 = vec3(_19034);
    vec3 _6932 = mix(_16559, _10559 * (1.0 + mix(mix(mix(g_fDamageBrightness1, g_fDamageBrightness2, _13915), g_fDamageBrightness3, _21941), g_fDamageBrightness4, _24699)), _19489);
    vec3 _12529 = mix(_6932, _12690 * _6932, vec3((smoothstep(0.449999988079071044921875, 0.75, (1.0 - ((_18168 * _20235) * _20235)) * g_fWearProgress) * (1.0 - (_23685 * 0.5))) * mix(mix(mix(g_fGrungeMax1, g_fGrungeMax2, _13915), g_fGrungeMax3, _21941), g_fGrungeMax4, _24699)));
    vec3 _7286 = _12529.xyz;
    float _15036 = dot(_7286, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125)) * 0.5;
    float _9533 = _12529.x;
    float _16877 = _12529.y;
    bool _12886;
    if (_9533 > _16877)
    {
        _12886 = _9533 > _12529.z;
    }
    else
    {
        _12886 = false;
    }
    vec3 _10970;
    vec3 _12555;
    if (_12886)
    {
        _10970 = vec3(0.60000002384185791015625, 1.0, 0.0) + _12529.zxy;
        _12555 = vec3(0.20000000298023223876953125, 0.60000002384185791015625, 1.0) + _12529.zyx;
    }
    else
    {
        bool _12887;
        if (_16877 > _9533)
        {
            _12887 = _16877 > _12529.z;
        }
        else
        {
            _12887 = false;
        }
        vec3 _13212;
        vec3 _15670;
        if (_12887)
        {
            _13212 = vec3(0.60000002384185791015625, 1.0, 0.0) + _12529.zxy;
            _15670 = vec3(0.20000000298023223876953125, 0.60000002384185791015625, 1.0) + _12529.yzx;
        }
        else
        {
            _13212 = vec3(0.60000002384185791015625, 1.0, 0.0);
            _15670 = vec3(0.20000000298023223876953125, 0.60000002384185791015625, 1.0);
        }
        _10970 = _13212;
        _12555 = _15670;
    }
    bool _21112;
    float _6982 = (pow(1.0 - _23685, 3.5) * 0.300000011920928955078125) + ((length(_12529 - vec3(_15036)) * 0.1500000059604644775390625) + 0.0500000007450580596923828125);
    float _22476 = pow(_20235, 8.0);
    vec3 _11286;
    do
    {
        _21112 = _6982 > 0.0;
        if (_21112)
        {
            vec3 _22574 = normalize(_12555.xyz * dot(_12555.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))).xyz - vec3(0.57700002193450927734375);
            vec3 _7059 = clamp((normalize(_22574) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
            vec3 _15714 = _7059 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
            _11286 = mix(_7286, _7059 * (_15036 / ((_15714.x + _15714.y) + _15714.z)), vec3(clamp(_6982 * pow(abs(dot(_22574, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0)));
            break;
        }
        else
        {
            _11286 = mix(_7286, vec3(dot(_12529.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))), vec3(-_6982));
            break;
        }
        break; // unreachable workaround
    } while(false);
    vec3 _16611;
    do
    {
        if (_21112)
        {
            vec3 _22575 = normalize(_10970.xyz * dot(_10970.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))).xyz - vec3(0.57700002193450927734375);
            vec3 _7060 = clamp((normalize(_22575) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
            vec3 _15715 = _7060 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
            _16611 = mix(_7286, _7060 * (_15036 / ((_15715.x + _15715.y) + _15715.z)), vec3(clamp(_6982 * pow(abs(dot(_22575, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0)));
            break;
        }
        else
        {
            _16611 = mix(_7286, vec3(dot(_12529.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))), vec3(-_6982));
            break;
        }
        break; // unreachable workaround
    } while(false);
    vec3 _17278 = clamp(mix(mix(_11286, _16611, vec3(clamp(_22476 * _22452.x, 0.0, 1.0))), _12529, vec3(clamp(_22452.z * (0.5 + (_22476 * 0.5)), 0.0, 1.0))), vec3(0.0), vec3(1.0));
    vec2 _13138;
    float _16324;
    _13138 = vec2(0.0);
    _16324 = 0.0;
    vec2 _10648;
    float _14733;
    int _18386;
    int _17017 = 0;
    for (;;)
    {
        if (!(_17017 < 4))
        {
            break;
        }
        vec2 _10548 = (_15902 + (((_592[_17017] * 0.0009765625) * _22171) * (1.0 + _17120))).xy;
        float _24694 = _19034 - smoothstep(_22935, _11001, clamp((mix(mix(mix(texture(g_tGrunge_s3, vec3(_10548, 0.0)).w, texture(g_tGrunge_s3, vec3(_10548, 1.0)).w, _13915), texture(g_tGrunge_s3, vec3(_10548, 2.0)).w, _21941), texture(g_tGrunge_s3, vec3(_10548, 3.0)).w, _24699) * _11428) + _20765, 0.0, 1.0) * g_fWearProgress);
        _10648 = _13138.xy - (_592[_17017] * _24694);
        _14733 = _16324 + abs(_24694);
        _18386 = _17017 + 1;
        _13138 = _10648;
        _16324 = _14733;
        _17017 = _18386;
        continue;
    }
    float _7827 = _16324 * 0.25;
    vec2 _11392 = _13138.xy * (_22171 * 0.25);
    vec2 _23775;
    if (g_nPatternMode < 2)
    {
        float _11401 = (0.0009765625 * g_fPaintThickness) * (1.0 - _7827);
        vec2 _13155;
        _13155 = vec2(0.0);
        vec2 _11588;
        int _11797;
        int _16208 = 0;
        for (;;)
        {
            if (!(_16208 < 4))
            {
                break;
            }
            vec4 _19373 = texture(g_tPattern_s3, (_23217.xy + ((_592[_16208] * _11401) * 2.0)).xy);
            float _16002 = _19373.x;
            float _18770 = _19373.y;
            float _14681 = _19373.z;
            _11588 = _13155.xy - ((((_592[_16208] * (_17120 - (((_16002 + _18770) + _14681) * g_fPaintThickness))).xy * (clamp(_9410, 0.0, 1.0) * _17119)).xy * (1.0 - min(min(_16002, _14681 - min(_16002, _18770)), _18770 - _16002))) * 0.5);
            _11797 = _16208 + 1;
            _13155 = _11588;
            _16208 = _11797;
            continue;
        }
        float _6962 = dot(_13155.xy, g_vPatternTexRotationXform0.xy);
        vec2 _8112 = vec2(_6962, dot(_13155.xy, g_vPatternTexRotationXform1.xy));
        float _10826 = _6962 * g_fFlipFixup;
        _8112.x = _10826;
        vec2 _12501;
        if (vIn0.x > 0.0)
        {
            vec2 _21219 = _8112;
            _21219.x = _10826 * (-1.0);
            _12501 = _21219;
        }
        else
        {
            _12501 = _8112;
        }
        _23775 = _12501;
    }
    else
    {
        _23775 = vec2(0.0);
    }
    vec3 _24364 = mix(_17118, normalize(vec3(vec2(_16785, _11178), (1.0 - abs(_16785)) - abs(_11178))), _19489);
    vec2 _22606 = _24364.xy * mix(mix(mix(g_fDetailNormalContrast1, g_fDetailNormalContrast2, _13915), g_fDetailNormalContrast3, _21941), g_fDetailNormalContrast4, _24699);
    vec3 _8673;
    _8673.x = _22606.x;
    _8673.y = _22606.y;
    vec3 _10041 = normalize(vec3(((_17934.xy + _8673.xy) - vec2(-dot(_11392, g_vGrungeTexRotationXform0.xy), dot(_11392, g_vGrungeTexRotationXform1.xy)).xy) + _23775.xy, _17934.z));
    float _19526 = mix(mix(_13137, mix(mix(mix(g_fDamageMetalness1, g_fDamageMetalness2, _13915), g_fDamageMetalness3, _21941), g_fDamageMetalness4, _24699), _19034), mix(mix(mix(g_fDamageEdgeMetalness1, g_fDamageEdgeMetalness2, _13915), g_fDamageEdgeMetalness3, _21941), g_fDamageEdgeMetalness4, _24699), _7827);
    float _11543 = mix(mix(mix(mix(g_fDetailCloth1, g_fDetailCloth2, _13915), g_fDetailCloth3, _21941), g_fDetailCloth4, _24699), mix(mix(mix(g_fDamageCloth1, g_fDamageCloth2, _13915), g_fDamageCloth3, _21941), g_fDamageCloth4, _24699), max(_17292, _7827)) * (1.0 - _19526);
    vec2 _22792 = mix(mix(vec2(1.0) * mix(min(1.0, _23554), (1.0 - _17907) + mix(mix(mix(g_fGrungeRoughnessBrightness1, g_fGrungeRoughnessBrightness2, _13915), g_fGrungeRoughnessBrightness3, _21941), g_fGrungeRoughnessBrightness4, _24699), _15624), vec2(clamp(((mix(mix(mix(g_fDamageRoughnessContrast1, g_fDamageRoughnessContrast2, _13915), g_fDamageRoughnessContrast3, _21941), g_fDamageRoughnessContrast4, _24699) * (((_17411 * _17411) * 0.85000002384185791015625) + (-0.3499999940395355224609375))) + 0.5) * mix(mix(mix(g_fDamageRoughnessBrightness1, g_fDamageRoughnessBrightness2, _13915), g_fDamageRoughnessBrightness3, _21941), g_fDamageRoughnessBrightness4, _24699), 0.0, 1.0)), vec2(_19034)).xy, vec2(mix(mix(mix(g_fDamageEdgeRoughness1, g_fDamageEdgeRoughness2, _13915), g_fDamageEdgeRoughness3, _21941), g_fDamageEdgeRoughness4, _24699)), vec2(_7827));
    vec3 _7958 = normalize(max(vec3(0.0003000000142492353916168212890625), _17278.xyz));
    vec3 _23898 = mix(g_vTextileAlbedoLevels.xyz, g_vMetallicTextileAlbedoLevels.xyz, vec3(_19526));
    float _22205 = ((_20235 * pow(_24364.z, 0.20000000298023223876953125)) * (1.0 - (_16324 * 0.0500000007450580596923828125))) * mix(_17121, 1.0, _19034);
    _10041.y = -_10041.y;
    vec3 _23712 = normalize(_10041.xyz);
    float _21931 = _22792.x;
    vec4 _23727;
    if (g_nOutputMode == 0)
    {
        _23727 = vec4(mix(_17278.xyz, ((_7958.xyz * mix(min(_23898.x, dot(mix(_10951, _23869, vec3(_22174)).xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125))), _23898.z, clamp(pow(max(_17278.x, max(_17278.y, _17278.z)), _23898.y), 0.0, 1.0))) / vec3(max(_7958.x, max(_7958.y, _7958.z)))).xyz, vec3(g_fWearProgress)).xyz, 1.0);
    }
    else
    {
        vec4 _12504;
        if (g_nOutputMode == 1)
        {
            float _8704 = _23712.y * (-1.0);
            vec3 _8007 = _23712;
            _8007.y = _8704;
            vec3 _16929 = _8007.xyz / vec3((abs(_23712.x) + abs(_8704)) + abs(_23712.z));
            float _10674 = _16929.x;
            float _23725 = _16929.y;
            vec2 _21979 = (vec2(_10674 + _23725, _10674 - _23725) * 0.5) + vec2(0.5);
            vec3 _16637 = vec3(_21979.xy, _21931).xyz;
            vec3 _10601 = _16637 * vec3(0.077399380505084991455078125);
            vec3 _7679 = pow((_16637 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
            float _21358;
            if (_21979.x <= 0.040449999272823333740234375)
            {
                _21358 = _10601.x;
            }
            else
            {
                _21358 = _7679.x;
            }
            float _23037;
            if (_21979.y <= 0.040449999272823333740234375)
            {
                _23037 = _10601.y;
            }
            else
            {
                _23037 = _7679.y;
            }
            float _19478;
            if (_21931 <= 0.040449999272823333740234375)
            {
                _19478 = _10601.z;
            }
            else
            {
                _19478 = _7679.z;
            }
            _12504 = vec4(vec3(_21358, _23037, _19478), 1.0);
        }
        else
        {
            vec4 _12503;
            if (g_nOutputMode == 2)
            {
                vec3 _20866 = vec3(0.0, _19526, _11543).xyz;
                vec3 _10600 = _20866 * vec3(0.077399380505084991455078125);
                vec3 _7678 = pow((_20866 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                float _23036;
                if (_19526 <= 0.040449999272823333740234375)
                {
                    _23036 = _10600.y;
                }
                else
                {
                    _23036 = _7678.y;
                }
                float _19476;
                if (_11543 <= 0.040449999272823333740234375)
                {
                    _19476 = _10600.z;
                }
                else
                {
                    _19476 = _7678.z;
                }
                _12503 = vec4(vec3(_10600.x, _23036, _19476), 1.0);
            }
            else
            {
                vec4 _12502;
                if (g_nOutputMode == 3)
                {
                    vec3 _20865 = vec3(_22205).xyz;
                    vec3 _10599 = _20865 * vec3(0.077399380505084991455078125);
                    vec3 _9358 = pow((_20865 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                    bool _17062 = _22205 <= 0.040449999272823333740234375;
                    float _12888;
                    if (_17062)
                    {
                        _12888 = _10599.x;
                    }
                    else
                    {
                        _12888 = _9358.x;
                    }
                    float _12889;
                    if (_17062)
                    {
                        _12889 = _10599.y;
                    }
                    else
                    {
                        _12889 = _9358.y;
                    }
                    float _19475;
                    if (_17062)
                    {
                        _19475 = _10599.z;
                    }
                    else
                    {
                        _19475 = _9358.z;
                    }
                    _12502 = vec4(vec3(_12888, _12889, _19475), 1.0);
                }
                else
                {
                    vec3 _16636 = vec3(_22792.xy, 0.0).xyz;
                    vec3 _10598 = _16636 * vec3(0.077399380505084991455078125);
                    vec3 _9357 = pow((_16636 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                    float _23035;
                    if (_21931 <= 0.040449999272823333740234375)
                    {
                        _23035 = _10598.x;
                    }
                    else
                    {
                        _23035 = _9357.x;
                    }
                    float _19302;
                    if (_22792.y <= 0.040449999272823333740234375)
                    {
                        _19302 = _10598.y;
                    }
                    else
                    {
                        _19302 = _9357.y;
                    }
                    _12502 = vec4(vec3(_23035, _19302, _10598.z), 1.0);
                }
                _12503 = _12502;
            }
            _12504 = _12503;
        }
        _23727 = _12504;
    }
    vec4 _6805;
    if (_11543 < 0.0)
    {
        vec4 _18969 = _23727;
        _18969.w = g_flSheenScale;
        _6805 = _18969;
    }
    else
    {
        _6805 = _23727;
    }
    outColor = _6805;
}

`,uniforms:[{name:`g_bPattern`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_flSheenScale`,glsl:`float`,type:1,fdef:[.667,0,0,0],idef:[]},{name:`g_nOutputMode`,glsl:`int`,type:5,fdef:[],idef:[0,0,0,0]},{name:`g_vTextileAlbedoLevels`,glsl:`vec3`,type:3,fdef:[0,0,0,0],idef:[]},{name:`g_vMetallicTextileAlbedoLevels`,glsl:`vec3`,type:3,fdef:[0,0,0,0],idef:[]},{name:`g_vGrungeTexCoordXform0`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vGrungeTexCoordXform1`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vGrungeTexRotationXform0`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vGrungeTexRotationXform1`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_fWearProgress`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailBlackPoint1`,glsl:`float`,type:1,fdef:[.047,0,0,0],idef:[]},{name:`g_fDetailBlackPointCompensation1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailScale1`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDetailRoughnessContrast1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDetailMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailNormalContrast1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vDamageLevels1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fDamageRoughnessContrast1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageSaturation1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBrightness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBleaching1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fCurvaturePower1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fCurvatureWearBoost1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageNormalEdgeWidth1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageEdgeRoughness1`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fDamageEdgeMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailGrunge1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrungeMax1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fGrungeRoughnessBrightness1`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fWearBleaching1`,glsl:`float`,type:1,fdef:[.25,0,0,0],idef:[]},{name:`g_fGrimeSaturation1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrimeBrightness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fColorMaskBlur`,glsl:`float`,type:1,fdef:[2,0,0,0],idef:[]},{name:`g_fFlipFixup`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternTexCoordXform0`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternTexCoordXform1`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternTexRotationXform0`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternTexRotationXform1`,glsl:`vec4`,type:4,fdef:[0,0,0,0],idef:[]},{name:`g_fPatternRoughnessBrightness`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fPatternMetalness`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fPaintThickness`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fPaintDurability`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fPaintShadowPower`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fPatternDetailInfluence`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_nPatternReplaceIndex`,glsl:`int`,type:5,fdef:[],idef:[1,0,0,0]},{name:`g_nPatternMode`,glsl:`int`,type:5,fdef:[],idef:[0,0,0,0]},{name:`g_vColorTint1`,glsl:`vec3`,type:3,fdef:[.15,.11,.08,0],idef:[]},{name:`g_vColorTint2`,glsl:`vec3`,type:3,fdef:[.23,.16,.26,0],idef:[]},{name:`g_vColorTint3`,glsl:`vec3`,type:3,fdef:[.16,.16,.28,0],idef:[]},{name:`g_vColorTint4`,glsl:`vec3`,type:3,fdef:[.2,.3,.3,0],idef:[]},{name:`g_vColorTint5`,glsl:`vec3`,type:3,fdef:[.09,.16,.1,0],idef:[]},{name:`g_vColorTint6`,glsl:`vec3`,type:3,fdef:[.29,.26,.11,0],idef:[]},{name:`g_vColorTint7`,glsl:`vec3`,type:3,fdef:[.32,.22,.12,0],idef:[]},{name:`g_vColorTint8`,glsl:`vec3`,type:3,fdef:[.21,.12,.09,0],idef:[]},{name:`g_vPatternPaletteIndices`,glsl:`ivec4`,type:8,fdef:[],idef:[5,6,7,8]},{name:`g_fDetailBlackPoint2`,glsl:`float`,type:1,fdef:[.047,0,0,0],idef:[]},{name:`g_fDetailBlackPointCompensation2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailScale2`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDetailRoughnessContrast2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDetailMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailNormalContrast2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vDamageLevels2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fDamageRoughnessContrast2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageSaturation2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBrightness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBleaching2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fCurvaturePower2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fCurvatureWearBoost2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageNormalEdgeWidth2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageEdgeRoughness2`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fDamageEdgeMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailGrunge2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrungeMax2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fGrungeRoughnessBrightness2`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fWearBleaching2`,glsl:`float`,type:1,fdef:[.25,0,0,0],idef:[]},{name:`g_fGrimeSaturation2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrimeBrightness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailBlackPoint3`,glsl:`float`,type:1,fdef:[.047,0,0,0],idef:[]},{name:`g_fDetailBlackPointCompensation3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailScale3`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDetailRoughnessContrast3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDetailMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailNormalContrast3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vDamageLevels3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fDamageRoughnessContrast3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageSaturation3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBrightness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBleaching3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fCurvaturePower3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fCurvatureWearBoost3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageNormalEdgeWidth3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageEdgeRoughness3`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fDamageEdgeMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailGrunge3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrungeMax3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fGrungeRoughnessBrightness3`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fWearBleaching3`,glsl:`float`,type:1,fdef:[.25,0,0,0],idef:[]},{name:`g_fGrimeSaturation3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrimeBrightness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailBlackPoint4`,glsl:`float`,type:1,fdef:[.047,0,0,0],idef:[]},{name:`g_fDetailBlackPointCompensation4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailScale4`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDetailRoughnessContrast4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDetailMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailNormalContrast4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vDamageLevels4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fDamageRoughnessContrast4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageSaturation4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBrightness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBleaching4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fCurvaturePower4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fCurvatureWearBoost4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageNormalEdgeWidth4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageEdgeRoughness4`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fDamageEdgeMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDetailGrunge4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrungeMax4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fGrungeRoughnessBrightness4`,glsl:`float`,type:1,fdef:[.8,0,0,0],idef:[]},{name:`g_fWearBleaching4`,glsl:`float`,type:1,fdef:[.25,0,0,0],idef:[]},{name:`g_fGrimeSaturation4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fGrimeBrightness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]}],samplers:[{uniform:`g_tLayerMask_s0`,param:`g_tLayerMask`,srgb:0,slot:0,filter:0,address:0},{uniform:`g_tLayerMask_s3`,param:`g_tLayerMask`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tNoise_s1`,param:`g_tNoise`,srgb:1,slot:1,filter:85,address:0},{uniform:`g_tNormal_s1`,param:`g_tNormal`,srgb:0,slot:1,filter:85,address:0},{uniform:`g_tPattern_s3`,param:`g_tPattern`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSurface_s3`,param:`g_tSurface`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tDamageNormal_s3`,layers:[`g_tDamageNormal1`,`g_tDamageNormal2`,`g_tDamageNormal3`,`g_tDamageNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tDetailNormal_s3`,layers:[`g_tDetailNormal1`,`g_tDetailNormal2`,`g_tDetailNormal3`,`g_tDetailNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tDetail_s3`,layers:[`g_tDetail1`,`g_tDetail2`,`g_tDetail3`,`g_tDetail4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tGrunge_s3`,layers:[`g_tGrunge1`,`g_tGrunge2`,`g_tGrunge3`,`g_tGrunge4`],srgb:1,slot:3,filter:21,address:0}],inputs:[[0,`vec4`]]},new:{fs:`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
uniform sampler2D g_tLayerId_s3;
uniform sampler2D g_tNormal_s1;
uniform sampler2D g_tObjectProperties_s1;
uniform sampler2D g_tPatternProperties_s3;
uniform sampler2D g_tPattern_s3;
uniform sampler2DArray g_tDamage_s3;
uniform sampler2DArray g_tGrime_s3;
uniform sampler2DArray g_tSubstrateNormal_s3;
uniform sampler2DArray g_tSubstrateProperties_s3;
uniform sampler2DArray g_tSubstrate_s3;
uniform sampler2DArray g_tSurfaceNormal_s3;
uniform sampler2DArray g_tSurfaceProperties_s3;
uniform sampler2DArray g_tSurface_s3;
float _2;
float _3;
vec3 _4;

uniform int g_bPattern;
uniform int g_nOutputMode;
uniform mat4 g_mSurfaceColorAdjust1;
uniform mat4 g_mSubstrateColorAdjust1;
uniform float g_fSubstrateCompositeColorTranslucency1;
uniform float g_fDamageUvScale1;
uniform float g_fDamageHeightBlendSoftness1;
uniform vec2 g_vDamageMinMax1;
uniform int g_bDamageBevelUseTintMask1;
uniform mat4 g_mDamageColorAdjust1;
uniform float g_fDamageBevelBlendSoftness1;
uniform float g_fDamageBevelEmboss1;
uniform float g_fDamageBevelRoughnessBrightness1;
uniform float g_fDamageBevelAnisotropy1;
uniform float g_fDamageBevelMetalness1;
uniform float g_fDamageBevelCloth1;
uniform int g_bDamageBevelBlendToSubstrate1;
uniform float g_fBurnishingMetalness1;
uniform float g_fBurnishingCloth1;
uniform mat4 g_mSurfaceBurnishingColorAdjust1;
uniform mat4 g_mSubstrateBurnishingColorAdjust1;
uniform float g_fBurnishingNormalScale1;
uniform float g_fSurfaceBurnishingRoughnessBrightness1;
uniform float g_fSubstrateBurnishingRoughnessBrightness1;
uniform vec2 g_vSurfaceBurnishingMinMax1;
uniform vec2 g_vSubstrateBurnishingMinMax1;
uniform float g_fGrimeUvScale1;
uniform float g_fGrimeTranslucency1;
uniform float g_fGrimeRoughnessBrightness1;
uniform vec2 g_vSurfaceGrimeMinMax1;
uniform vec2 g_vSubstrateGrimeMinMax1;
uniform float g_fBurnishingGrime1;
uniform mat4 g_mSurfaceColorAdjust2;
uniform mat4 g_mSubstrateColorAdjust2;
uniform float g_fSubstrateCompositeColorTranslucency2;
uniform float g_fDamageUvScale2;
uniform float g_fDamageHeightBlendSoftness2;
uniform vec2 g_vDamageMinMax2;
uniform int g_bDamageBevelUseTintMask2;
uniform mat4 g_mDamageColorAdjust2;
uniform float g_fDamageBevelBlendSoftness2;
uniform float g_fDamageBevelEmboss2;
uniform float g_fDamageBevelRoughnessBrightness2;
uniform float g_fDamageBevelAnisotropy2;
uniform float g_fDamageBevelMetalness2;
uniform float g_fDamageBevelCloth2;
uniform int g_bDamageBevelBlendToSubstrate2;
uniform float g_fBurnishingMetalness2;
uniform float g_fBurnishingCloth2;
uniform mat4 g_mSurfaceBurnishingColorAdjust2;
uniform mat4 g_mSubstrateBurnishingColorAdjust2;
uniform float g_fBurnishingNormalScale2;
uniform float g_fSurfaceBurnishingRoughnessBrightness2;
uniform float g_fSubstrateBurnishingRoughnessBrightness2;
uniform vec2 g_vSurfaceBurnishingMinMax2;
uniform vec2 g_vSubstrateBurnishingMinMax2;
uniform float g_fGrimeUvScale2;
uniform float g_fGrimeTranslucency2;
uniform float g_fGrimeRoughnessBrightness2;
uniform vec2 g_vSurfaceGrimeMinMax2;
uniform vec2 g_vSubstrateGrimeMinMax2;
uniform float g_fBurnishingGrime2;
uniform mat4 g_mSurfaceColorAdjust3;
uniform mat4 g_mSubstrateColorAdjust3;
uniform float g_fSubstrateCompositeColorTranslucency3;
uniform float g_fDamageUvScale3;
uniform float g_fDamageHeightBlendSoftness3;
uniform vec2 g_vDamageMinMax3;
uniform int g_bDamageBevelUseTintMask3;
uniform mat4 g_mDamageColorAdjust3;
uniform float g_fDamageBevelBlendSoftness3;
uniform float g_fDamageBevelEmboss3;
uniform float g_fDamageBevelRoughnessBrightness3;
uniform float g_fDamageBevelAnisotropy3;
uniform float g_fDamageBevelMetalness3;
uniform float g_fDamageBevelCloth3;
uniform int g_bDamageBevelBlendToSubstrate3;
uniform float g_fBurnishingMetalness3;
uniform float g_fBurnishingCloth3;
uniform mat4 g_mSurfaceBurnishingColorAdjust3;
uniform mat4 g_mSubstrateBurnishingColorAdjust3;
uniform float g_fBurnishingNormalScale3;
uniform float g_fSurfaceBurnishingRoughnessBrightness3;
uniform float g_fSubstrateBurnishingRoughnessBrightness3;
uniform vec2 g_vSurfaceBurnishingMinMax3;
uniform vec2 g_vSubstrateBurnishingMinMax3;
uniform float g_fGrimeUvScale3;
uniform float g_fGrimeTranslucency3;
uniform float g_fGrimeRoughnessBrightness3;
uniform vec2 g_vSurfaceGrimeMinMax3;
uniform vec2 g_vSubstrateGrimeMinMax3;
uniform float g_fBurnishingGrime3;
uniform mat4 g_mSurfaceColorAdjust4;
uniform mat4 g_mSubstrateColorAdjust4;
uniform float g_fSubstrateCompositeColorTranslucency4;
uniform float g_fDamageUvScale4;
uniform float g_fDamageHeightBlendSoftness4;
uniform vec2 g_vDamageMinMax4;
uniform int g_bDamageBevelUseTintMask4;
uniform mat4 g_mDamageColorAdjust4;
uniform float g_fDamageBevelBlendSoftness4;
uniform float g_fDamageBevelEmboss4;
uniform float g_fDamageBevelRoughnessBrightness4;
uniform float g_fDamageBevelAnisotropy4;
uniform float g_fDamageBevelMetalness4;
uniform float g_fDamageBevelCloth4;
uniform int g_bDamageBevelBlendToSubstrate4;
uniform float g_fBurnishingMetalness4;
uniform float g_fBurnishingCloth4;
uniform mat4 g_mSurfaceBurnishingColorAdjust4;
uniform mat4 g_mSubstrateBurnishingColorAdjust4;
uniform float g_fBurnishingNormalScale4;
uniform float g_fSurfaceBurnishingRoughnessBrightness4;
uniform float g_fSubstrateBurnishingRoughnessBrightness4;
uniform vec2 g_vSurfaceBurnishingMinMax4;
uniform vec2 g_vSubstrateBurnishingMinMax4;
uniform float g_fGrimeUvScale4;
uniform float g_fGrimeTranslucency4;
uniform float g_fGrimeRoughnessBrightness4;
uniform vec2 g_vSurfaceGrimeMinMax4;
uniform vec2 g_vSubstrateGrimeMinMax4;
uniform float g_fBurnishingGrime4;
uniform int g_bPatternPaintLayer;
uniform int g_bPatternPaintEmboss;
uniform float g_fPatternTranslucencyThreshold;
uniform int g_fPatternPaintRespectsTintMask;
uniform float g_fPatternCloth;
uniform float g_fPatternEmboss;
uniform float g_fPuffyPaintNormalSoftness;
uniform vec2 g_vPatternRoughnessContrastBrightness;
uniform float g_fSubstratePatternMipBias;
uniform float g_fWearProgress;


in vec4 vIn0;
in vec4 vIn1;
in vec4 vIn2;
in vec4 vIn3;
in vec4 vIn4;
in vec3 vIn5;
in vec4 vIn6;
out vec4 outColor;

void main()
{
    vec3 _7244 = vec3(vIn0.x, 1.0 - vIn0.y, 1.0);
    vec3 _20527 = cross(vIn5.xyz, vIn6.xyz) * ((vIn6.w > 0.0) ? 1.0 : (-1.0));
    float _11266 = dFdx(vIn0.x);
    float _8552 = dFdy(vIn0.y);
    float _5625 = 0.00048828125 / max(_11266, _8552);
    vec4 _19372 = texture(g_tLayerId_s3, vIn0.xy);
    float _15088 = _19372.x;
    float _12846 = (_19372.z + _19372.y) + _15088;
    float _12687 = max(0.0, 1.0 - _12846);
    vec4 _20009 = vec4(_15088, _19372.yz, _12687) / vec4(_12846 + _12687);
    float _7021 = dFdx(vIn2.x);
    float _14684 = dFdx(vIn2.y);
    vec2 _7272 = vec2(_7021, _14684);
    float _19730 = dFdy(vIn2.x);
    float _11417 = dFdy(vIn2.y);
    vec2 _24870 = vec2(_19730, _11417);
    float _12659 = dFdx(vIn2.z);
    float _14685 = dFdx(vIn2.w);
    vec2 _7273 = vec2(_12659, _14685);
    float _19731 = dFdy(vIn2.z);
    float _11418 = dFdy(vIn2.w);
    vec2 _24871 = vec2(_19731, _11418);
    float _12660 = dFdx(vIn3.x);
    float _14686 = dFdx(vIn3.y);
    vec2 _7274 = vec2(_12660, _14686);
    float _19732 = dFdy(vIn3.x);
    float _11419 = dFdy(vIn3.y);
    vec2 _24872 = vec2(_19732, _11419);
    float _12661 = dFdx(vIn3.z);
    float _14687 = dFdx(vIn3.w);
    vec2 _7275 = vec2(_12661, _14687);
    float _19733 = dFdy(vIn3.z);
    float _11420 = dFdy(vIn3.w);
    vec2 _24414 = vec2(_19733, _11420);
    float _9306 = _20009.x;
    bool _9694 = _9306 > 0.0;
    vec4 _6223;
    vec2 _13136;
    vec4 _13189;
    if (_9694)
    {
        _13136 = textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.xy, 0.0), (_7272 * g_fPuffyPaintNormalSoftness).xy, (_24870 * g_fPuffyPaintNormalSoftness).xy).wy * _9306;
        _13189 = textureGrad(g_tSubstrateNormal_s3, vec3(vIn2.xy, 0.0), _7272, _24870).xyzw * _9306;
        _6223 = textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.xy, 0.0), _7272, _24870).xyzw * _9306;
    }
    else
    {
        _13136 = vec2(0.0);
        _13189 = vec4(0.0);
        _6223 = vec4(0.0);
    }
    float _23427 = _20009.y;
    bool _17155 = _23427 > 0.0;
    vec4 _6224;
    vec2 _13137;
    vec4 _13190;
    if (_17155)
    {
        _13137 = _13136.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.zw, 1.0), (_7273 * g_fPuffyPaintNormalSoftness).xy, (_24871 * g_fPuffyPaintNormalSoftness).xy).wy * _23427);
        _13190 = _13189.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn2.zw, 1.0), _7273, _24871).xyzw * _23427);
        _6224 = _6223.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.zw, 1.0), _7273, _24871).xyzw * _23427);
    }
    else
    {
        _13137 = _13136;
        _13190 = _13189;
        _6224 = _6223;
    }
    float _23428 = _20009.z;
    bool _17156 = _23428 > 0.0;
    vec4 _6225;
    vec2 _13138;
    vec4 _13191;
    if (_17156)
    {
        _13138 = _13137.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.xy, 2.0), (_7274 * g_fPuffyPaintNormalSoftness).xy, (_24872 * g_fPuffyPaintNormalSoftness).xy).wy * _23428);
        _13191 = _13190.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn3.xy, 2.0), _7274, _24872).xyzw * _23428);
        _6225 = _6224.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.xy, 2.0), _7274, _24872).xyzw * _23428);
    }
    else
    {
        _13138 = _13137;
        _13191 = _13190;
        _6225 = _6224;
    }
    float _23429 = _20009.w;
    bool _17157 = _23429 > 0.0;
    vec2 _13139;
    vec4 _13192;
    vec4 _23299;
    if (_17157)
    {
        _13139 = _13138.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.zw, 3.0), (_7275 * g_fPuffyPaintNormalSoftness).xy, (_24414 * g_fPuffyPaintNormalSoftness).xy).wy * _23429);
        _13192 = _13191.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn3.zw, 3.0), _7275, _24414).xyzw * _23429);
        _23299 = _6225.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.zw, 3.0), _7275, _24414).xyzw * _23429);
    }
    else
    {
        _13139 = _13138;
        _13192 = _13191;
        _23299 = _6225;
    }
    vec2 _23430;
    float _16783 = (_23299.w + _23299.y) - 1.00392162799835205078125;
    float _11176 = _23299.w - _23299.y;
    vec3 _14854 = normalize(vec3(vec2(_16783, _11176), (1.0 - abs(_16783)) - abs(_11176)));
    float _16784 = (_13192.w + _13192.y) - 1.00392162799835205078125;
    float _11177 = _13192.w - _13192.y;
    float _16785 = (_13139.x + _13139.y) - 1.00392162799835205078125;
    float _11178 = _13139.x - _13139.y;
    vec3 _13150;
    float _13998;
    vec3 _16317;
    float _17334;
    float _17335;
    float _17336;
    float _17337;
    vec3 _17338;
    vec2 _17339;
    vec2 _17340;
    vec2 _17342;
    vec3 _17343;
    vec3 _17344;
    float _17345;
    float _17346;
    float _17347;
    float _17354;
    vec2 _17355;
    vec2 _17356;
    vec3 _17357;
    vec3 _17358;
    float _17359;
    float _17360;
    vec2 _17361;
    vec4 _17362;
    vec2 _17363;
    float _17364;
    float _17365;
    float _17366;
    float _17367;
    float _17368;
    float _17369;
    float _17370;
    float _17371;
    float _17372;
    float _17373;
    float _23300;
    do
    {
        vec2 _25090 = (vIn1.xy - (vIn1.zw * _14854.xy)).xy;
        vec4 _22452 = texture(g_tPattern_s3, _25090);
        vec4 _20706 = texture(g_tPatternProperties_s3, _25090);
        _23430 = normalize(vec3(vec2(_16784, _11177), (1.0 - abs(_16784)) - abs(_11177))).xy;
        vec4 _19373 = texture(g_tPattern_s3, (vIn1.xy - (vIn1.zw * _23430)).xy, g_fSubstratePatternMipBias);
        float _24623 = _22452.w;
        bool _14874 = g_bPatternPaintEmboss != 0;
        float _9716;
        vec4 _24878;
        if (_14874)
        {
            vec4 _9250 = _22452;
            _9250.w = smoothstep(g_fPatternTranslucencyThreshold, g_fPatternTranslucencyThreshold + 0.039999999105930328369140625, _24623);
            _9716 = clamp((_24623 * (1.0 + g_fPatternTranslucencyThreshold)) - g_fPatternTranslucencyThreshold, 0.0, 1.0);
            _24878 = _9250;
        }
        else
        {
            _9716 = _24623;
            _24878 = _22452;
        }
        bool _14875 = g_bPattern != 0;
        bool _12887;
        if (_14875)
        {
            _12887 = g_bPatternPaintLayer == 0;
        }
        else
        {
            _12887 = false;
        }
        float _6536;
        vec3 _7078;
        float _8530;
        float _8531;
        vec2 _9596;
        vec3 _10658;
        vec3 _12900;
        float _13559;
        vec3 _14273;
        bool _14876;
        float _16297;
        float _16973;
        vec3 _18503;
        float _22892;
        float _22893;
        vec3 _23992;
        vec2 _13143;
        vec2 _16308;
        vec2 _17190;
        vec2 _17191;
        float _17192;
        vec4 _17193;
        vec2 _17194;
        float _17195;
        float _17196;
        float _17197;
        float _17198;
        float _17199;
        float _17200;
        float _17201;
        float _17202;
        float _17203;
        float _17204;
        float _17205;
        float _17206;
        float _17209;
        float _21709;
        if (_12887)
        {
            float _10902 = _19373.w;
            vec3 _19714 = mix(vec3(1.0), _19373.xyz, vec3(max(1.0, _10902) * _24878.w));
            float _14750 = max(0.0, _10902 * _24878.w);
            vec4 _11729 = vec4(_19714, _14750);
            vec3 _14905 = mix(vec3(1.0), _24878.xyz, vec3(_24878.w));
            float _14615 = max(0.0, _24878.w * _24878.w);
            float _22280 = _14905.x;
            float _17341 = _14905.y;
            float _24875 = _14905.z;
            vec4 _10562 = vec4(_22280, _17341, _24875, _14615);
            float _7259 = dFdx(vIn2.x);
            float _18737 = dFdx(vIn2.y);
            float _12361 = dFdy(vIn2.x);
            float _12285 = dFdy(vIn2.y);
            float _18075 = dFdx(vIn2.z);
            float _24608 = dFdx(vIn2.w);
            float _12371 = dFdy(vIn2.z);
            float _12286 = dFdy(vIn2.w);
            float _18076 = dFdx(vIn3.x);
            float _24609 = dFdx(vIn3.y);
            float _12372 = dFdy(vIn3.x);
            float _12287 = dFdy(vIn3.y);
            float _18077 = dFdx(vIn3.z);
            float _24610 = dFdx(vIn3.w);
            float _9870 = dFdy(vIn3.z);
            float _13125 = dFdy(vIn3.w);
            vec2 _13399 = vIn4.xy * g_fDamageUvScale1;
            vec2 _13400 = vIn4.xy * g_fDamageUvScale2;
            vec2 _13401 = vIn4.xy * g_fDamageUvScale3;
            vec2 _13437 = vIn4.xy * g_fDamageUvScale4;
            float _12000 = _13399.x;
            float _23922 = dFdx(_12000);
            float _18331 = _13399.y;
            float _11100 = dFdx(_18331);
            float _12115 = dFdy(_12000);
            float _15534 = dFdy(_18331);
            float _10986 = _13400.x;
            float _12077 = dFdx(_10986);
            float _18332 = _13400.y;
            float _11101 = dFdx(_18332);
            float _12116 = dFdy(_10986);
            float _15535 = dFdy(_18332);
            float _10987 = _13401.x;
            float _12078 = dFdx(_10987);
            float _18333 = _13401.y;
            float _11102 = dFdx(_18333);
            float _12117 = dFdy(_10987);
            float _15536 = dFdy(_18333);
            float _10988 = _13437.x;
            float _12079 = dFdx(_10988);
            float _18334 = _13437.y;
            float _11103 = dFdx(_18334);
            float _12080 = dFdy(_10988);
            float _13126 = dFdy(_18334);
            vec2 _13402 = vIn4.zw * g_fGrimeUvScale1;
            vec2 _13403 = vIn4.zw * g_fGrimeUvScale2;
            vec2 _13404 = vIn4.zw * g_fGrimeUvScale3;
            vec2 _13438 = vIn4.zw * g_fGrimeUvScale4;
            float _12001 = _13402.x;
            float _23923 = dFdx(_12001);
            float _18335 = _13402.y;
            float _11104 = dFdx(_18335);
            float _12118 = dFdy(_12001);
            float _15537 = dFdy(_18335);
            float _10989 = _13403.x;
            float _12081 = dFdx(_10989);
            float _18336 = _13403.y;
            float _11105 = dFdx(_18336);
            float _12119 = dFdy(_10989);
            float _15538 = dFdy(_18336);
            float _10990 = _13404.x;
            float _12082 = dFdx(_10990);
            float _18337 = _13404.y;
            float _11106 = dFdx(_18337);
            float _12120 = dFdy(_10990);
            float _15539 = dFdy(_18337);
            float _10991 = _13438.x;
            float _12083 = dFdx(_10991);
            float _18338 = _13438.y;
            float _11107 = dFdx(_18338);
            float _15264 = dFdy(_10991);
            float _6642 = dFdy(_18338);
            float _13144;
            float _16309;
            vec2 _16866;
            float _17213;
            bool _17214;
            float _17215;
            float _17216;
            float _17217;
            float _17218;
            float _17219;
            float _17220;
            float _17221;
            float _17222;
            float _17225;
            float _17226;
            float _17227;
            float _17228;
            vec2 _17229;
            vec2 _17230;
            vec2 _17231;
            vec2 _17232;
            float _17233;
            vec4 _17234;
            float _17235;
            vec4 _17236;
            vec4 _17237;
            vec4 _17238;
            vec4 _17239;
            if (_9694)
            {
                vec2 _6262 = vec2(_7259, _18737);
                vec2 _19542 = vec2(_12361, _12285);
                _13144 = g_fBurnishingNormalScale1 * _9306;
                _16309 = g_fSurfaceBurnishingRoughnessBrightness1 * _9306;
                _17213 = g_fSubstrateBurnishingRoughnessBrightness1 * _9306;
                _17214 = g_bDamageBevelUseTintMask1 != 0;
                _17215 = g_fDamageBevelEmboss1 * _9306;
                _17216 = g_fDamageHeightBlendSoftness1 * _9306;
                _17217 = g_fDamageBevelBlendSoftness1 * _9306;
                _17218 = g_fBurnishingGrime1 * _9306;
                _17219 = g_fGrimeRoughnessBrightness1 * _9306;
                _17220 = g_fBurnishingCloth1 * _9306;
                _17221 = g_fBurnishingMetalness1 * _9306;
                _17222 = float(g_bDamageBevelBlendToSubstrate1 != 0) * _9306;
                _17225 = g_fDamageBevelCloth1 * _9306;
                _17226 = g_fDamageBevelMetalness1 * _9306;
                _17227 = g_fDamageBevelAnisotropy1 * _9306;
                _17228 = g_fDamageBevelRoughnessBrightness1 * _9306;
                _17229 = g_vSubstrateGrimeMinMax1 * _9306;
                _17230 = g_vSurfaceGrimeMinMax1 * _9306;
                _17231 = g_vSubstrateBurnishingMinMax1 * _9306;
                _17232 = g_vSurfaceBurnishingMinMax1 * _9306;
                _17233 = g_fSubstrateCompositeColorTranslucency1 * _9306;
                _17234 = vec4(textureGrad(g_tGrime_s3, vec3(_13402.xy, 0.0), vec2(_23923, _11104), vec2(_12118, _15537)).xyz * _9306, g_fGrimeTranslucency1 * _9306);
                _17235 = textureGrad(g_tDamage_s3, vec3(_13399.xy, 0.0), vec2(_23922, _11100), vec2(_12115, _15534)).x * _9306;
                _17236 = textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.xy, 0.0), _6262, _19542).xyzw * _9306;
                _17237 = textureGrad(g_tSubstrate_s3, vec3(vIn2.xy, 0.0), _6262, _19542).xyzw * _9306;
                _17238 = textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.xy, 0.0), _6262, _19542).xyzw * _9306;
                _17239 = textureGrad(g_tSurface_s3, vec3(vIn2.xy, 0.0), _6262, _19542).xyzw * _9306;
                _16866 = g_vDamageMinMax1 * _9306;
            }
            else
            {
                _13144 = 0.0;
                _16309 = 0.0;
                _17213 = 0.0;
                _17214 = false;
                _17215 = 0.0;
                _17216 = 0.0;
                _17217 = 0.0;
                _17218 = 0.0;
                _17219 = 0.0;
                _17220 = 0.0;
                _17221 = 0.0;
                _17222 = 0.0;
                _17225 = 0.0;
                _17226 = 0.0;
                _17227 = 0.0;
                _17228 = 0.0;
                _17229 = vec2(0.0);
                _17230 = vec2(0.0);
                _17231 = vec2(0.0);
                _17232 = vec2(0.0);
                _17233 = 0.0;
                _17234 = vec4(0.0);
                _17235 = 0.0;
                _17236 = vec4(0.0);
                _17237 = vec4(0.0);
                _17238 = vec4(0.0);
                _17239 = vec4(0.0);
                _16866 = vec2(0.0);
            }
            float _13145;
            float _16310;
            vec2 _16867;
            float _17240;
            bool _17241;
            float _17246;
            float _17247;
            float _17248;
            float _17249;
            float _17250;
            float _17251;
            float _17252;
            float _17253;
            float _17257;
            float _17258;
            float _17259;
            float _17260;
            vec2 _17261;
            vec2 _17262;
            vec2 _17263;
            vec2 _17264;
            float _17265;
            vec4 _17266;
            float _17267;
            vec4 _17268;
            vec4 _17269;
            vec4 _17270;
            vec4 _17271;
            if (_17155)
            {
                vec2 _16498 = vec2(_18075, _24608);
                vec2 _19545 = vec2(_12371, _12286);
                _13145 = g_fBurnishingNormalScale2 * _23427;
                _16310 = g_fSurfaceBurnishingRoughnessBrightness2 * _23427;
                _17240 = g_fSubstrateBurnishingRoughnessBrightness2 * _23427;
                _17241 = g_bDamageBevelUseTintMask2 != 0;
                _17246 = _17215 + (g_fDamageBevelEmboss2 * _23427);
                _17247 = _17216 + (g_fDamageHeightBlendSoftness2 * _23427);
                _17248 = _17217 + (g_fDamageBevelBlendSoftness2 * _23427);
                _17249 = _17218 + (g_fBurnishingGrime2 * _23427);
                _17250 = _17219 + (g_fGrimeRoughnessBrightness2 * _23427);
                _17251 = _17220 + (g_fBurnishingCloth2 * _23427);
                _17252 = _17221 + (g_fBurnishingMetalness2 * _23427);
                _17253 = _17222 + (float(g_bDamageBevelBlendToSubstrate2 != 0) * _23427);
                _17257 = _17225 + (g_fDamageBevelCloth2 * _23427);
                _17258 = _17226 + (g_fDamageBevelMetalness2 * _23427);
                _17259 = _17227 + (g_fDamageBevelAnisotropy2 * _23427);
                _17260 = _17228 + (g_fDamageBevelRoughnessBrightness2 * _23427);
                _17261 = _17229 + (g_vSubstrateGrimeMinMax2 * _23427);
                _17262 = _17230 + (g_vSurfaceGrimeMinMax2 * _23427);
                _17263 = _17231 + (g_vSubstrateBurnishingMinMax2 * _23427);
                _17264 = _17232 + (g_vSurfaceBurnishingMinMax2 * _23427);
                _17265 = _17233 + (g_fSubstrateCompositeColorTranslucency2 * _23427);
                _17266 = vec4(_17234.xyz + (textureGrad(g_tGrime_s3, vec3(_13403.xy, 1.0), vec2(_12081, _11105), vec2(_12119, _15538)).xyz * _23427), _17234.w + (g_fGrimeTranslucency2 * _23427));
                _17267 = _17235 + (textureGrad(g_tDamage_s3, vec3(_13400.xy, 1.0), vec2(_12077, _11101), vec2(_12116, _15535)).x * _23427);
                _17268 = _17236.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.zw, 1.0), _16498, _19545).xyzw * _23427);
                _17269 = _17237.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn2.zw, 1.0), _16498, _19545).xyzw * _23427);
                _17270 = _17238.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.zw, 1.0), _16498, _19545).xyzw * _23427);
                _17271 = _17239.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn2.zw, 1.0), _16498, _19545).xyzw * _23427);
                _16867 = _16866 + (g_vDamageMinMax2 * _23427);
            }
            else
            {
                _13145 = _13144;
                _16310 = _16309;
                _17240 = _17213;
                _17241 = _17214;
                _17246 = _17215;
                _17247 = _17216;
                _17248 = _17217;
                _17249 = _17218;
                _17250 = _17219;
                _17251 = _17220;
                _17252 = _17221;
                _17253 = _17222;
                _17257 = _17225;
                _17258 = _17226;
                _17259 = _17227;
                _17260 = _17228;
                _17261 = _17229;
                _17262 = _17230;
                _17263 = _17231;
                _17264 = _17232;
                _17265 = _17233;
                _17266 = _17234;
                _17267 = _17235;
                _17268 = _17236;
                _17269 = _17237;
                _17270 = _17238;
                _17271 = _17239;
                _16867 = _16866;
            }
            float _13146;
            float _16311;
            vec2 _16868;
            float _17272;
            bool _17273;
            float _17274;
            float _17275;
            float _17276;
            float _17277;
            float _17278;
            float _17279;
            float _17280;
            float _17281;
            float _17282;
            float _17285;
            float _17286;
            float _17287;
            vec2 _17288;
            vec2 _17289;
            vec2 _17290;
            vec2 _17291;
            float _17292;
            vec4 _17293;
            float _17294;
            vec4 _17295;
            vec4 _17296;
            vec4 _17297;
            vec4 _17298;
            if (_17156)
            {
                vec2 _16500 = vec2(_18076, _24609);
                vec2 _19549 = vec2(_12372, _12287);
                _13146 = g_fBurnishingNormalScale3 * _23428;
                _16311 = g_fSurfaceBurnishingRoughnessBrightness3 * _23428;
                _17272 = g_fSubstrateBurnishingRoughnessBrightness3 * _23428;
                _17273 = g_bDamageBevelUseTintMask3 != 0;
                _17274 = _17246 + (g_fDamageBevelEmboss3 * _23428);
                _17275 = _17247 + (g_fDamageHeightBlendSoftness3 * _23428);
                _17276 = _17248 + (g_fDamageBevelBlendSoftness3 * _23428);
                _17277 = _17249 + (g_fBurnishingGrime3 * _23428);
                _17278 = _17250 + (g_fGrimeRoughnessBrightness3 * _23428);
                _17279 = _17251 + (g_fBurnishingCloth3 * _23428);
                _17280 = _17252 + (g_fBurnishingMetalness3 * _23428);
                _17281 = _17253 + (float(g_bDamageBevelBlendToSubstrate3 != 0) * _23428);
                _17282 = _17257 + (g_fDamageBevelCloth3 * _23428);
                _17285 = _17258 + (g_fDamageBevelMetalness3 * _23428);
                _17286 = _17259 + (g_fDamageBevelAnisotropy3 * _23428);
                _17287 = _17260 + (g_fDamageBevelRoughnessBrightness3 * _23428);
                _17288 = _17261 + (g_vSubstrateGrimeMinMax3 * _23428);
                _17289 = _17262 + (g_vSurfaceGrimeMinMax3 * _23428);
                _17290 = _17263 + (g_vSubstrateBurnishingMinMax3 * _23428);
                _17291 = _17264 + (g_vSurfaceBurnishingMinMax3 * _23428);
                _17292 = _17265 + (g_fSubstrateCompositeColorTranslucency3 * _23428);
                _17293 = vec4(_17266.xyz + (textureGrad(g_tGrime_s3, vec3(_13404.xy, 2.0), vec2(_12082, _11106), vec2(_12120, _15539)).xyz * _23428), _17266.w + (g_fGrimeTranslucency3 * _23428));
                _17294 = _17267 + (textureGrad(g_tDamage_s3, vec3(_13401.xy, 2.0), vec2(_12078, _11102), vec2(_12117, _15536)).x * _23428);
                _17295 = _17268.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.xy, 2.0), _16500, _19549).xyzw * _23428);
                _17296 = _17269.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.xy, 2.0), _16500, _19549).xyzw * _23428);
                _17297 = _17270.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.xy, 2.0), _16500, _19549).xyzw * _23428);
                _17298 = _17271.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.xy, 2.0), _16500, _19549).xyzw * _23428);
                _16868 = _16867 + (g_vDamageMinMax3 * _23428);
            }
            else
            {
                _13146 = _13145;
                _16311 = _16310;
                _17272 = _17240;
                _17273 = _17241;
                _17274 = _17246;
                _17275 = _17247;
                _17276 = _17248;
                _17277 = _17249;
                _17278 = _17250;
                _17279 = _17251;
                _17280 = _17252;
                _17281 = _17253;
                _17282 = _17257;
                _17285 = _17258;
                _17286 = _17259;
                _17287 = _17260;
                _17288 = _17261;
                _17289 = _17262;
                _17290 = _17263;
                _17291 = _17264;
                _17292 = _17265;
                _17293 = _17266;
                _17294 = _17267;
                _17295 = _17268;
                _17296 = _17269;
                _17297 = _17270;
                _17298 = _17271;
                _16868 = _16867;
            }
            vec4 _6617;
            vec2 _13147;
            bool _13695;
            vec2 _16312;
            vec2 _17299;
            vec2 _17300;
            float _17301;
            float _17302;
            vec4 _17303;
            vec2 _17304;
            float _17305;
            float _17306;
            float _17307;
            float _17308;
            float _17309;
            float _17310;
            float _17311;
            float _17312;
            float _17313;
            float _17314;
            float _17315;
            float _17316;
            float _17317;
            float _17318;
            float _17319;
            vec4 _17320;
            vec4 _17321;
            vec4 _17322;
            if (_17157)
            {
                vec2 _16502 = vec2(_18077, _24610);
                vec2 _19553 = vec2(_9870, _13125);
                _13147 = _17291 + (g_vSurfaceBurnishingMinMax4 * _23429);
                _16312 = _17289 + (g_vSurfaceGrimeMinMax4 * _23429);
                _17299 = _17290 + (g_vSubstrateBurnishingMinMax4 * _23429);
                _17300 = _17288 + (g_vSubstrateGrimeMinMax4 * _23429);
                _17301 = _17294 + (textureGrad(g_tDamage_s3, vec3(_13437.xy, 3.0), vec2(_12079, _11103), vec2(_12080, _13126)).x * _23429);
                _17302 = _17275 + (g_fDamageHeightBlendSoftness4 * _23429);
                _17303 = vec4(_17293.xyz + (textureGrad(g_tGrime_s3, vec3(_13438.xy, 3.0), vec2(_12083, _11107), vec2(_15264, _6642)).xyz * _23429), _17293.w + (g_fGrimeTranslucency4 * _23429));
                _17304 = _16868 + (g_vDamageMinMax4 * _23429);
                _17305 = _17278 + (g_fGrimeRoughnessBrightness4 * _23429);
                _17306 = _17276 + (g_fDamageBevelBlendSoftness4 * _23429);
                _17307 = _17282 + (g_fDamageBevelCloth4 * _23429);
                _17308 = _17281 + (float(g_bDamageBevelBlendToSubstrate4 != 0) * _23429);
                _17309 = _17280 + (g_fBurnishingMetalness4 * _23429);
                _17310 = _17274 + (g_fDamageBevelEmboss4 * _23429);
                _17311 = _17279 + (g_fBurnishingCloth4 * _23429);
                _17312 = _17277 + (g_fBurnishingGrime4 * _23429);
                _17313 = g_fBurnishingNormalScale4 * _23429;
                _17314 = g_fSurfaceBurnishingRoughnessBrightness4 * _23429;
                _17315 = g_fSubstrateBurnishingRoughnessBrightness4 * _23429;
                _17316 = _17286 + (g_fDamageBevelAnisotropy4 * _23429);
                _17317 = _17287 + (g_fDamageBevelRoughnessBrightness4 * _23429);
                _17318 = _17285 + (g_fDamageBevelMetalness4 * _23429);
                _17319 = _17292 + (g_fSubstrateCompositeColorTranslucency4 * _23429);
                _17320 = _17295.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.zw, 3.0), _16502, _19553).xyzw * _23429);
                _17321 = _17296.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.zw, 3.0), _16502, _19553).xyzw * _23429);
                _17322 = _17297.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.zw, 3.0), _16502, _19553).xyzw * _23429);
                _13695 = g_bDamageBevelUseTintMask4 != 0;
                _6617 = _17298.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.zw, 3.0), _16502, _19553).xyzw * _23429);
            }
            else
            {
                _13147 = _17291;
                _16312 = _17289;
                _17299 = _17290;
                _17300 = _17288;
                _17301 = _17294;
                _17302 = _17275;
                _17303 = _17293;
                _17304 = _16868;
                _17305 = _17278;
                _17306 = _17276;
                _17307 = _17282;
                _17308 = _17281;
                _17309 = _17280;
                _17310 = _17274;
                _17311 = _17279;
                _17312 = _17277;
                _17313 = _13146;
                _17314 = _16311;
                _17315 = _17272;
                _17316 = _17286;
                _17317 = _17287;
                _17318 = _17285;
                _17319 = _17292;
                _17320 = _17295;
                _17321 = _17296;
                _17322 = _17297;
                _13695 = _17273;
                _6617 = _17298;
            }
            bool _14877 = g_fPatternPaintRespectsTintMask != 0;
            float _21711;
            if (_14877)
            {
                _21711 = _6617.w;
            }
            else
            {
                _21711 = max(_6617.w, _24878.w);
            }
            mat4 _19938 = mat4((((g_mSurfaceBurnishingColorAdjust1[0] * _9306) + (g_mSurfaceBurnishingColorAdjust2[0] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[0] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[0] * _23429), (((g_mSurfaceBurnishingColorAdjust1[1] * _9306) + (g_mSurfaceBurnishingColorAdjust2[1] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[1] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[1] * _23429), (((g_mSurfaceBurnishingColorAdjust1[2] * _9306) + (g_mSurfaceBurnishingColorAdjust2[2] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[2] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[2] * _23429), (((g_mSurfaceBurnishingColorAdjust1[3] * _9306) + (g_mSurfaceBurnishingColorAdjust2[3] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[3] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[3] * _23429));
            vec4 _24835 = vec4(_6617.xyz, 1.0);
            vec4 _11582 = vec4((_24835 * mat4((((g_mSurfaceColorAdjust1[0] * _9306) + (g_mSurfaceColorAdjust2[0] * _23427)) + (g_mSurfaceColorAdjust3[0] * _23428)) + (g_mSurfaceColorAdjust4[0] * _23429), (((g_mSurfaceColorAdjust1[1] * _9306) + (g_mSurfaceColorAdjust2[1] * _23427)) + (g_mSurfaceColorAdjust3[1] * _23428)) + (g_mSurfaceColorAdjust4[1] * _23429), (((g_mSurfaceColorAdjust1[2] * _9306) + (g_mSurfaceColorAdjust2[2] * _23427)) + (g_mSurfaceColorAdjust3[2] * _23428)) + (g_mSurfaceColorAdjust4[2] * _23429), (((g_mSurfaceColorAdjust1[3] * _9306) + (g_mSurfaceColorAdjust2[3] * _23427)) + (g_mSurfaceColorAdjust3[3] * _23428)) + (g_mSurfaceColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18228 = _11582.xyz;
            vec3 _16611;
            do
            {
                float _20940;
                do
                {
                    float _18473 = max(_22280, max(_17341, _24875));
                    if (_18473 == 0.0)
                    {
                        _20940 = 0.0;
                        break;
                    }
                    _20940 = (_18473 - min(_22280, min(_17341, _24875))) / _18473;
                    break;
                } while(false);
                float _12835 = dot(_10562.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23052 = max(dot(_11582.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_12835 > 0.0)
                {
                    vec3 _22572 = normalize(_10562.xyz).xyz - vec3(0.57700002193450927734375);
                    vec3 _7057 = clamp((normalize(_22572) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15712 = _7057 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16611 = mix((_18228 * mix(1.0, min(max(1.0 + (4.0 * (_12835 - 0.5)), mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17322.y) / _23052), mix(0.89999997615814208984375, 0.980000019073486328125, _17322.y) / _23052), _14615)).xyz, _7057 * (_12835 / ((_15712.x + _15712.y) + _15712.z)), vec3(clamp(_20940 * pow(abs(dot(_22572, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _14615));
                    break;
                }
                else
                {
                    _16611 = _18228;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec3 _19312 = mix(_6617.xyz, _16611, vec3(_21711));
            float _21712;
            if (_14877)
            {
                _21712 = _17321.w;
            }
            else
            {
                _21712 = max(_17321.w, _24878.w);
            }
            bool _6221;
            vec3 _7901;
            float _9231;
            float _12836;
            bool _15230;
            float _16314;
            float _18474;
            float _6651 = _14750 * _17319;
            vec4 _24836 = vec4(_17321.xyz, 1.0);
            vec4 _11583 = vec4((_24836 * mat4((((g_mSubstrateColorAdjust1[0] * _9306) + (g_mSubstrateColorAdjust2[0] * _23427)) + (g_mSubstrateColorAdjust3[0] * _23428)) + (g_mSubstrateColorAdjust4[0] * _23429), (((g_mSubstrateColorAdjust1[1] * _9306) + (g_mSubstrateColorAdjust2[1] * _23427)) + (g_mSubstrateColorAdjust3[1] * _23428)) + (g_mSubstrateColorAdjust4[1] * _23429), (((g_mSubstrateColorAdjust1[2] * _9306) + (g_mSubstrateColorAdjust2[2] * _23427)) + (g_mSubstrateColorAdjust3[2] * _23428)) + (g_mSubstrateColorAdjust4[2] * _23429), (((g_mSubstrateColorAdjust1[3] * _9306) + (g_mSubstrateColorAdjust2[3] * _23427)) + (g_mSubstrateColorAdjust3[3] * _23428)) + (g_mSubstrateColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18229 = _11583.xyz;
            vec3 _16612;
            do
            {
                _7901 = _11729.xyz;
                float _20941;
                do
                {
                    float _17002 = _19714.x;
                    float _10964 = _19714.y;
                    float _21520 = _19714.z;
                    _18474 = max(_17002, max(_10964, _21520));
                    _16314 = _18474 - min(_17002, min(_10964, _21520));
                    _6221 = _18474 == 0.0;
                    if (_6221)
                    {
                        _20941 = 0.0;
                        break;
                    }
                    _20941 = _16314 / _18474;
                    break;
                } while(false);
                _12836 = dot(_11729.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23053 = max(dot(_11583.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                _9231 = 4.0 * (_12836 - 0.5);
                _15230 = _12836 > 0.0;
                if (_15230)
                {
                    vec3 _22573 = normalize(_7901).xyz - vec3(0.57700002193450927734375);
                    vec3 _7058 = clamp((normalize(_22573) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15713 = _7058 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16612 = mix((_18229 * mix(1.0, min(max(1.0 + _9231, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17320.y) / _23053), mix(0.89999997615814208984375, 0.980000019073486328125, _17320.y) / _23053), _6651)).xyz, _7058 * (_12836 / ((_15713.x + _15713.y) + _15713.z)), vec3(clamp(_20941 * pow(abs(dot(_22573, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _6651));
                    break;
                }
                else
                {
                    _16612 = _18229;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec4 _11584 = vec4((_24835 * mat4((((g_mDamageColorAdjust1[0] * _9306) + (g_mDamageColorAdjust2[0] * _23427)) + (g_mDamageColorAdjust3[0] * _23428)) + (g_mDamageColorAdjust4[0] * _23429), (((g_mDamageColorAdjust1[1] * _9306) + (g_mDamageColorAdjust2[1] * _23427)) + (g_mDamageColorAdjust3[1] * _23428)) + (g_mDamageColorAdjust4[1] * _23429), (((g_mDamageColorAdjust1[2] * _9306) + (g_mDamageColorAdjust2[2] * _23427)) + (g_mDamageColorAdjust3[2] * _23428)) + (g_mDamageColorAdjust4[2] * _23429), (((g_mDamageColorAdjust1[3] * _9306) + (g_mDamageColorAdjust2[3] * _23427)) + (g_mDamageColorAdjust3[3] * _23428)) + (g_mDamageColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18230 = _11584.xyz;
            vec3 _16615;
            do
            {
                float _20942;
                do
                {
                    if (_6221)
                    {
                        _20942 = 0.0;
                        break;
                    }
                    _20942 = _16314 / _18474;
                    break;
                } while(false);
                float _17323 = max(dot(_11584.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_15230)
                {
                    vec3 _22574 = normalize(_7901).xyz - vec3(0.57700002193450927734375);
                    vec3 _7059 = clamp((normalize(_22574) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15714 = _7059 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16615 = mix((_18230 * mix(1.0, min(max(1.0 + _9231, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17318) / _17323), mix(0.89999997615814208984375, 0.980000019073486328125, _17318) / _17323), _6651)).xyz, _7059 * (_12836 / ((_15714.x + _15714.y) + _15714.z)), vec3(clamp(_20942 * pow(abs(dot(_22574, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _6651));
                    break;
                }
                else
                {
                    _16615 = _18230;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec3 _11467 = mix(_19312.xyz, _16615, vec3(_13695 ? _21711 : 1.0));
            vec2 _23651 = _23299.xz * _17317;
            _23651.y = mix(_23651.x, _23651.y, _17316);
            _13150 = _19312;
            _16317 = vec3((_24835 * _19938).xyz);
            _17334 = _17322.x;
            _17335 = _17322.w;
            _17336 = _17322.y;
            _17337 = _17322.z * (1.0 - _17322.y);
            _17338 = _14854;
            _17339 = mix(_23299.xz, clamp((((_23299.xz - vec2(0.5)) + vec2(g_vPatternRoughnessContrastBrightness.y)) * g_vPatternRoughnessContrastBrightness.x) + vec2(0.5), vec2(0.0), vec2(1.0)), vec2(_24878.w * _21711));
            _17340 = _13147;
            _17342 = _16312;
            _17343 = mix(_17321.xyz, _16612, vec3(_21712));
            _17344 = vec3((_24836 * mat4((((g_mSubstrateBurnishingColorAdjust1[0] * _9306) + (g_mSubstrateBurnishingColorAdjust2[0] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[0] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[0] * _23429), (((g_mSubstrateBurnishingColorAdjust1[1] * _9306) + (g_mSubstrateBurnishingColorAdjust2[1] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[1] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[1] * _23429), (((g_mSubstrateBurnishingColorAdjust1[2] * _9306) + (g_mSubstrateBurnishingColorAdjust2[2] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[2] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[2] * _23429), (((g_mSubstrateBurnishingColorAdjust1[3] * _9306) + (g_mSubstrateBurnishingColorAdjust2[3] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[3] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[3] * _23429))).xyz);
            _17345 = _17320.x;
            _17346 = _17320.w;
            _17347 = _17320.z * (1.0 - _17320.y);
            _17354 = _17320.y;
            _17355 = _17299;
            _17356 = _17300;
            _17357 = _11467;
            _17358 = vec4((vec4(vec4(_11467.xyz, 1.0).xyz, 1.0) * _19938).xyz, 1.0).xyz;
            _17359 = _17301;
            _17360 = _17302;
            _17361 = _23651;
            _17362 = _17303;
            _17363 = _17304;
            _17364 = _17305;
            _17365 = _17306;
            _17366 = _17318;
            _17367 = _17307;
            _17368 = _17308;
            _17369 = _17309;
            _17370 = _17310;
            _17371 = _17311;
            _17372 = _17312;
            _17373 = _17313;
            _13998 = _17314;
            _23300 = _17315;
            break;
        }
        else
        {
            float _23270 = dFdx(vIn2.x);
            float _6318 = dFdx(vIn2.y);
            float _12358 = dFdy(vIn2.x);
            float _12282 = dFdy(vIn2.y);
            float _18072 = dFdx(vIn2.z);
            float _24605 = dFdx(vIn2.w);
            float _12359 = dFdy(vIn2.z);
            float _12283 = dFdy(vIn2.w);
            float _18073 = dFdx(vIn3.x);
            float _24606 = dFdx(vIn3.y);
            float _12360 = dFdy(vIn3.x);
            float _12284 = dFdy(vIn3.y);
            float _18074 = dFdx(vIn3.z);
            float _24607 = dFdx(vIn3.w);
            float _9869 = dFdy(vIn3.z);
            float _13119 = dFdy(vIn3.w);
            vec2 _13372 = vIn4.xy * g_fDamageUvScale1;
            vec2 _13373 = vIn4.xy * g_fDamageUvScale2;
            vec2 _13374 = vIn4.xy * g_fDamageUvScale3;
            vec2 _13435 = vIn4.xy * g_fDamageUvScale4;
            float _11998 = _13372.x;
            float _23920 = dFdx(_11998);
            float _18323 = _13372.y;
            float _11092 = dFdx(_18323);
            float _12109 = dFdy(_11998);
            float _15528 = dFdy(_18323);
            float _10980 = _13373.x;
            float _12070 = dFdx(_10980);
            float _18324 = _13373.y;
            float _11093 = dFdx(_18324);
            float _12110 = dFdy(_10980);
            float _15529 = dFdy(_18324);
            float _10981 = _13374.x;
            float _12071 = dFdx(_10981);
            float _18325 = _13374.y;
            float _11094 = dFdx(_18325);
            float _12111 = dFdy(_10981);
            float _15530 = dFdy(_18325);
            float _10982 = _13435.x;
            float _12072 = dFdx(_10982);
            float _18326 = _13435.y;
            float _11095 = dFdx(_18326);
            float _12073 = dFdy(_10982);
            float _13120 = dFdy(_18326);
            vec2 _13375 = vIn4.zw * g_fGrimeUvScale1;
            vec2 _13376 = vIn4.zw * g_fGrimeUvScale2;
            vec2 _13377 = vIn4.zw * g_fGrimeUvScale3;
            vec2 _13436 = vIn4.zw * g_fGrimeUvScale4;
            float _11999 = _13375.x;
            float _23921 = dFdx(_11999);
            float _18327 = _13375.y;
            float _11096 = dFdx(_18327);
            float _12112 = dFdy(_11999);
            float _15531 = dFdy(_18327);
            float _10983 = _13376.x;
            float _12074 = dFdx(_10983);
            float _18328 = _13376.y;
            float _11097 = dFdx(_18328);
            float _12113 = dFdy(_10983);
            float _15532 = dFdy(_18328);
            float _10984 = _13377.x;
            float _12075 = dFdx(_10984);
            float _18329 = _13377.y;
            float _11098 = dFdx(_18329);
            float _12114 = dFdy(_10984);
            float _15533 = dFdy(_18329);
            float _10985 = _13436.x;
            float _12076 = dFdx(_10985);
            float _18330 = _13436.y;
            float _11099 = dFdx(_18330);
            float _15263 = dFdy(_10985);
            float _6641 = dFdy(_18330);
            float _13140;
            float _16305;
            vec2 _16863;
            float _17114;
            bool _17115;
            float _17116;
            float _17117;
            float _17118;
            float _17119;
            float _17120;
            float _17121;
            float _17122;
            float _17123;
            float _17124;
            float _17125;
            float _17126;
            float _17127;
            vec2 _17128;
            vec2 _17129;
            vec2 _17130;
            vec2 _17131;
            vec4 _17132;
            float _17133;
            vec4 _17134;
            vec4 _17135;
            vec4 _17136;
            vec4 _17152;
            if (_9694)
            {
                vec2 _6260 = vec2(_23270, _6318);
                vec2 _19530 = vec2(_12358, _12282);
                _13140 = g_fBurnishingNormalScale1 * _9306;
                _16305 = g_fSurfaceBurnishingRoughnessBrightness1 * _9306;
                _17114 = g_fSubstrateBurnishingRoughnessBrightness1 * _9306;
                _17115 = g_bDamageBevelUseTintMask1 != 0;
                _17116 = g_fDamageBevelEmboss1 * _9306;
                _17117 = g_fDamageHeightBlendSoftness1 * _9306;
                _17118 = g_fDamageBevelBlendSoftness1 * _9306;
                _17119 = g_fBurnishingGrime1 * _9306;
                _17120 = g_fGrimeRoughnessBrightness1 * _9306;
                _17121 = g_fBurnishingCloth1 * _9306;
                _17122 = g_fBurnishingMetalness1 * _9306;
                _17123 = float(g_bDamageBevelBlendToSubstrate1 != 0) * _9306;
                _17124 = g_fDamageBevelCloth1 * _9306;
                _17125 = g_fDamageBevelMetalness1 * _9306;
                _17126 = g_fDamageBevelAnisotropy1 * _9306;
                _17127 = g_fDamageBevelRoughnessBrightness1 * _9306;
                _17128 = g_vSubstrateGrimeMinMax1 * _9306;
                _17129 = g_vSurfaceGrimeMinMax1 * _9306;
                _17130 = g_vSubstrateBurnishingMinMax1 * _9306;
                _17131 = g_vSurfaceBurnishingMinMax1 * _9306;
                _17132 = vec4(textureGrad(g_tGrime_s3, vec3(_13375.xy, 0.0), vec2(_23921, _11096), vec2(_12112, _15531)).xyz * _9306, g_fGrimeTranslucency1 * _9306);
                _17133 = textureGrad(g_tDamage_s3, vec3(_13372.xy, 0.0), vec2(_23920, _11092), vec2(_12109, _15528)).x * _9306;
                _17134 = textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17135 = textureGrad(g_tSubstrate_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17136 = textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17152 = textureGrad(g_tSurface_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _16863 = g_vDamageMinMax1 * _9306;
            }
            else
            {
                _13140 = 0.0;
                _16305 = 0.0;
                _17114 = 0.0;
                _17115 = false;
                _17116 = 0.0;
                _17117 = 0.0;
                _17118 = 0.0;
                _17119 = 0.0;
                _17120 = 0.0;
                _17121 = 0.0;
                _17122 = 0.0;
                _17123 = 0.0;
                _17124 = 0.0;
                _17125 = 0.0;
                _17126 = 0.0;
                _17127 = 0.0;
                _17128 = vec2(0.0);
                _17129 = vec2(0.0);
                _17130 = vec2(0.0);
                _17131 = vec2(0.0);
                _17132 = vec4(0.0);
                _17133 = 0.0;
                _17134 = vec4(0.0);
                _17135 = vec4(0.0);
                _17136 = vec4(0.0);
                _17152 = vec4(0.0);
                _16863 = vec2(0.0);
            }
            float _13141;
            float _16306;
            vec2 _16864;
            float _17137;
            bool _17138;
            float _17139;
            float _17140;
            float _17141;
            float _17142;
            float _17143;
            float _17145;
            float _17146;
            float _17147;
            float _17148;
            float _17149;
            float _17150;
            float _17151;
            vec2 _17153;
            vec2 _17154;
            vec2 _17158;
            vec2 _17159;
            vec4 _17160;
            float _17161;
            vec4 _17162;
            vec4 _17163;
            vec4 _17164;
            vec4 _17165;
            if (_17155)
            {
                vec2 _16492 = vec2(_18072, _24605);
                vec2 _19533 = vec2(_12359, _12283);
                _13141 = g_fBurnishingNormalScale2 * _23427;
                _16306 = g_fSurfaceBurnishingRoughnessBrightness2 * _23427;
                _17137 = g_fSubstrateBurnishingRoughnessBrightness2 * _23427;
                _17138 = g_bDamageBevelUseTintMask2 != 0;
                _17139 = _17116 + (g_fDamageBevelEmboss2 * _23427);
                _17140 = _17117 + (g_fDamageHeightBlendSoftness2 * _23427);
                _17141 = _17118 + (g_fDamageBevelBlendSoftness2 * _23427);
                _17142 = _17119 + (g_fBurnishingGrime2 * _23427);
                _17143 = _17120 + (g_fGrimeRoughnessBrightness2 * _23427);
                _17145 = _17121 + (g_fBurnishingCloth2 * _23427);
                _17146 = _17122 + (g_fBurnishingMetalness2 * _23427);
                _17147 = _17123 + (float(g_bDamageBevelBlendToSubstrate2 != 0) * _23427);
                _17148 = _17124 + (g_fDamageBevelCloth2 * _23427);
                _17149 = _17125 + (g_fDamageBevelMetalness2 * _23427);
                _17150 = _17126 + (g_fDamageBevelAnisotropy2 * _23427);
                _17151 = _17127 + (g_fDamageBevelRoughnessBrightness2 * _23427);
                _17153 = _17128 + (g_vSubstrateGrimeMinMax2 * _23427);
                _17154 = _17129 + (g_vSurfaceGrimeMinMax2 * _23427);
                _17158 = _17130 + (g_vSubstrateBurnishingMinMax2 * _23427);
                _17159 = _17131 + (g_vSurfaceBurnishingMinMax2 * _23427);
                _17160 = vec4(_17132.xyz + (textureGrad(g_tGrime_s3, vec3(_13376.xy, 1.0), vec2(_12074, _11097), vec2(_12113, _15532)).xyz * _23427), _17132.w + (g_fGrimeTranslucency2 * _23427));
                _17161 = _17133 + (textureGrad(g_tDamage_s3, vec3(_13373.xy, 1.0), vec2(_12070, _11093), vec2(_12110, _15529)).x * _23427);
                _17162 = _17134.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17163 = _17135.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17164 = _17136.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17165 = _17152.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _16864 = _16863 + (g_vDamageMinMax2 * _23427);
            }
            else
            {
                _13141 = _13140;
                _16306 = _16305;
                _17137 = _17114;
                _17138 = _17115;
                _17139 = _17116;
                _17140 = _17117;
                _17141 = _17118;
                _17142 = _17119;
                _17143 = _17120;
                _17145 = _17121;
                _17146 = _17122;
                _17147 = _17123;
                _17148 = _17124;
                _17149 = _17125;
                _17150 = _17126;
                _17151 = _17127;
                _17153 = _17128;
                _17154 = _17129;
                _17158 = _17130;
                _17159 = _17131;
                _17160 = _17132;
                _17161 = _17133;
                _17162 = _17134;
                _17163 = _17135;
                _17164 = _17136;
                _17165 = _17152;
                _16864 = _16863;
            }
            float _13142;
            float _16307;
            vec2 _16865;
            float _17166;
            bool _17167;
            float _17168;
            float _17169;
            float _17170;
            float _17171;
            float _17172;
            float _17173;
            float _17174;
            float _17175;
            float _17176;
            float _17177;
            float _17178;
            float _17179;
            vec2 _17180;
            vec2 _17181;
            vec2 _17182;
            vec2 _17183;
            vec4 _17184;
            float _17185;
            vec4 _17186;
            vec4 _17187;
            vec4 _17188;
            vec4 _17189;
            if (_17156)
            {
                vec2 _16494 = vec2(_18073, _24606);
                vec2 _19536 = vec2(_12360, _12284);
                _13142 = g_fBurnishingNormalScale3 * _23428;
                _16307 = g_fSurfaceBurnishingRoughnessBrightness3 * _23428;
                _17166 = g_fSubstrateBurnishingRoughnessBrightness3 * _23428;
                _17167 = g_bDamageBevelUseTintMask3 != 0;
                _17168 = _17139 + (g_fDamageBevelEmboss3 * _23428);
                _17169 = _17140 + (g_fDamageHeightBlendSoftness3 * _23428);
                _17170 = _17141 + (g_fDamageBevelBlendSoftness3 * _23428);
                _17171 = _17142 + (g_fBurnishingGrime3 * _23428);
                _17172 = _17143 + (g_fGrimeRoughnessBrightness3 * _23428);
                _17173 = _17145 + (g_fBurnishingCloth3 * _23428);
                _17174 = _17146 + (g_fBurnishingMetalness3 * _23428);
                _17175 = _17147 + (float(g_bDamageBevelBlendToSubstrate3 != 0) * _23428);
                _17176 = _17148 + (g_fDamageBevelCloth3 * _23428);
                _17177 = _17149 + (g_fDamageBevelMetalness3 * _23428);
                _17178 = _17150 + (g_fDamageBevelAnisotropy3 * _23428);
                _17179 = _17151 + (g_fDamageBevelRoughnessBrightness3 * _23428);
                _17180 = _17153 + (g_vSubstrateGrimeMinMax3 * _23428);
                _17181 = _17154 + (g_vSurfaceGrimeMinMax3 * _23428);
                _17182 = _17158 + (g_vSubstrateBurnishingMinMax3 * _23428);
                _17183 = _17159 + (g_vSurfaceBurnishingMinMax3 * _23428);
                _17184 = vec4(_17160.xyz + (textureGrad(g_tGrime_s3, vec3(_13377.xy, 2.0), vec2(_12075, _11098), vec2(_12114, _15533)).xyz * _23428), _17160.w + (g_fGrimeTranslucency3 * _23428));
                _17185 = _17161 + (textureGrad(g_tDamage_s3, vec3(_13374.xy, 2.0), vec2(_12071, _11094), vec2(_12111, _15530)).x * _23428);
                _17186 = _17162.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.xy, 2.0), _16494, _19536).xyzw * _23428);
                _17187 = _17163.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.xy, 2.0), _16494, _19536).xyzw * _23428);
                _17188 = _17164.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.xy, 2.0), _16494, _19536).xyzw * _23428);
                _17189 = _17165.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.xy, 2.0), _16494, _19536).xyzw * _23428);
                _16865 = _16864 + (g_vDamageMinMax3 * _23428);
            }
            else
            {
                _13142 = _13141;
                _16307 = _16306;
                _17166 = _17137;
                _17167 = _17138;
                _17168 = _17139;
                _17169 = _17140;
                _17170 = _17141;
                _17171 = _17142;
                _17172 = _17143;
                _17173 = _17145;
                _17174 = _17146;
                _17175 = _17147;
                _17176 = _17148;
                _17177 = _17149;
                _17178 = _17150;
                _17179 = _17151;
                _17180 = _17153;
                _17181 = _17154;
                _17182 = _17158;
                _17183 = _17159;
                _17184 = _17160;
                _17185 = _17161;
                _17186 = _17162;
                _17187 = _17163;
                _17188 = _17164;
                _17189 = _17165;
                _16865 = _16864;
            }
            vec4 _6616;
            bool _13694;
            float _17207;
            float _17208;
            vec4 _17210;
            vec4 _17211;
            vec4 _17212;
            if (_17157)
            {
                vec2 _16496 = vec2(_18074, _24607);
                vec2 _19539 = vec2(_9869, _13119);
                _13143 = _17183 + (g_vSurfaceBurnishingMinMax4 * _23429);
                _16308 = _17181 + (g_vSurfaceGrimeMinMax4 * _23429);
                _17190 = _17182 + (g_vSubstrateBurnishingMinMax4 * _23429);
                _17191 = _17180 + (g_vSubstrateGrimeMinMax4 * _23429);
                _17192 = _17185 + (textureGrad(g_tDamage_s3, vec3(_13435.xy, 3.0), vec2(_12072, _11095), vec2(_12073, _13120)).x * _23429);
                _17193 = vec4(_17184.xyz + (textureGrad(g_tGrime_s3, vec3(_13436.xy, 3.0), vec2(_12076, _11099), vec2(_15263, _6641)).xyz * _23429), _17184.w + (g_fGrimeTranslucency4 * _23429));
                _17194 = _16865 + (g_vDamageMinMax4 * _23429);
                _17195 = _17172 + (g_fGrimeRoughnessBrightness4 * _23429);
                _17196 = _17176 + (g_fDamageBevelCloth4 * _23429);
                _17197 = _17175 + (float(g_bDamageBevelBlendToSubstrate4 != 0) * _23429);
                _17198 = _17174 + (g_fBurnishingMetalness4 * _23429);
                _17199 = _17173 + (g_fBurnishingCloth4 * _23429);
                _17200 = _17171 + (g_fBurnishingGrime4 * _23429);
                _17201 = g_fBurnishingNormalScale4 * _23429;
                _17202 = g_fSurfaceBurnishingRoughnessBrightness4 * _23429;
                _17203 = g_fSubstrateBurnishingRoughnessBrightness4 * _23429;
                _17204 = _17169 + (g_fDamageHeightBlendSoftness4 * _23429);
                _17205 = _17170 + (g_fDamageBevelBlendSoftness4 * _23429);
                _17206 = _17168 + (g_fDamageBevelEmboss4 * _23429);
                _17207 = _17178 + (g_fDamageBevelAnisotropy4 * _23429);
                _17208 = _17179 + (g_fDamageBevelRoughnessBrightness4 * _23429);
                _17209 = _17177 + (g_fDamageBevelMetalness4 * _23429);
                _17210 = _17186.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.zw, 3.0), _16496, _19539).xyzw * _23429);
                _17211 = _17187.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.zw, 3.0), _16496, _19539).xyzw * _23429);
                _17212 = _17188.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.zw, 3.0), _16496, _19539).xyzw * _23429);
                _13694 = g_bDamageBevelUseTintMask4 != 0;
                _6616 = _17189.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.zw, 3.0), _16496, _19539).xyzw * _23429);
            }
            else
            {
                _13143 = _17183;
                _16308 = _17181;
                _17190 = _17182;
                _17191 = _17180;
                _17192 = _17185;
                _17193 = _17184;
                _17194 = _16865;
                _17195 = _17172;
                _17196 = _17176;
                _17197 = _17175;
                _17198 = _17174;
                _17199 = _17173;
                _17200 = _17171;
                _17201 = _13142;
                _17202 = _16307;
                _17203 = _17166;
                _17204 = _17169;
                _17205 = _17170;
                _17206 = _17168;
                _17207 = _17178;
                _17208 = _17179;
                _17209 = _17177;
                _17210 = _17186;
                _17211 = _17187;
                _17212 = _17188;
                _13694 = _17167;
                _6616 = _17189;
            }
            _14876 = g_fPatternPaintRespectsTintMask != 0;
            if (_14876)
            {
                _21709 = _6616.w;
            }
            else
            {
                _21709 = max(_6616.w, 0.0);
            }
            mat4 _19935 = mat4((((g_mSurfaceBurnishingColorAdjust1[0] * _9306) + (g_mSurfaceBurnishingColorAdjust2[0] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[0] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[0] * _23429), (((g_mSurfaceBurnishingColorAdjust1[1] * _9306) + (g_mSurfaceBurnishingColorAdjust2[1] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[1] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[1] * _23429), (((g_mSurfaceBurnishingColorAdjust1[2] * _9306) + (g_mSurfaceBurnishingColorAdjust2[2] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[2] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[2] * _23429), (((g_mSurfaceBurnishingColorAdjust1[3] * _9306) + (g_mSurfaceBurnishingColorAdjust2[3] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[3] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[3] * _23429));
            _13559 = _17212.x;
            _16973 = _17212.y;
            _8530 = _17212.z * (1.0 - _16973);
            _22892 = _17212.w;
            vec4 _24833 = vec4(_6616.xyz, 1.0);
            _14273 = mix(_6616.xyz, (vec4((_24833 * mat4((((g_mSurfaceColorAdjust1[0] * _9306) + (g_mSurfaceColorAdjust2[0] * _23427)) + (g_mSurfaceColorAdjust3[0] * _23428)) + (g_mSurfaceColorAdjust4[0] * _23429), (((g_mSurfaceColorAdjust1[1] * _9306) + (g_mSurfaceColorAdjust2[1] * _23427)) + (g_mSurfaceColorAdjust3[1] * _23428)) + (g_mSurfaceColorAdjust4[1] * _23429), (((g_mSurfaceColorAdjust1[2] * _9306) + (g_mSurfaceColorAdjust2[2] * _23427)) + (g_mSurfaceColorAdjust3[2] * _23428)) + (g_mSurfaceColorAdjust4[2] * _23429), (((g_mSurfaceColorAdjust1[3] * _9306) + (g_mSurfaceColorAdjust2[3] * _23427)) + (g_mSurfaceColorAdjust3[3] * _23428)) + (g_mSurfaceColorAdjust4[3] * _23429))).xyz, _2).xyz * 1.0).xyz, vec3(_21709));
            _23992 = vec3((_24833 * _19935).xyz);
            float _21710;
            if (_14876)
            {
                _21710 = _17211.w;
            }
            else
            {
                _21710 = max(_17211.w, 0.0);
            }
            vec3 _11572;
            _16297 = _17210.x;
            _6536 = _17210.y;
            _8531 = _17210.z * (1.0 - _6536);
            _22893 = _17210.w;
            vec4 _24834 = vec4(_17211.xyz, 1.0);
            do
            {
                _11572 = (vec4((_24834 * mat4((((g_mSubstrateColorAdjust1[0] * _9306) + (g_mSubstrateColorAdjust2[0] * _23427)) + (g_mSubstrateColorAdjust3[0] * _23428)) + (g_mSubstrateColorAdjust4[0] * _23429), (((g_mSubstrateColorAdjust1[1] * _9306) + (g_mSubstrateColorAdjust2[1] * _23427)) + (g_mSubstrateColorAdjust3[1] * _23428)) + (g_mSubstrateColorAdjust4[1] * _23429), (((g_mSubstrateColorAdjust1[2] * _9306) + (g_mSubstrateColorAdjust2[2] * _23427)) + (g_mSubstrateColorAdjust3[2] * _23428)) + (g_mSubstrateColorAdjust4[2] * _23429), (((g_mSubstrateColorAdjust1[3] * _9306) + (g_mSubstrateColorAdjust2[3] * _23427)) + (g_mSubstrateColorAdjust3[3] * _23428)) + (g_mSubstrateColorAdjust4[3] * _23429))).xyz, _2).xyz * 1.0).xyz;
                break;
            } while(false);
            vec3 _11573;
            _18503 = mix(_17211.xyz, _11572, vec3(_21710));
            _12900 = vec3((_24834 * mat4((((g_mSubstrateBurnishingColorAdjust1[0] * _9306) + (g_mSubstrateBurnishingColorAdjust2[0] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[0] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[0] * _23429), (((g_mSubstrateBurnishingColorAdjust1[1] * _9306) + (g_mSubstrateBurnishingColorAdjust2[1] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[1] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[1] * _23429), (((g_mSubstrateBurnishingColorAdjust1[2] * _9306) + (g_mSubstrateBurnishingColorAdjust2[2] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[2] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[2] * _23429), (((g_mSubstrateBurnishingColorAdjust1[3] * _9306) + (g_mSubstrateBurnishingColorAdjust2[3] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[3] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[3] * _23429))).xyz);
            do
            {
                _11573 = (vec4((_24833 * mat4((((g_mDamageColorAdjust1[0] * _9306) + (g_mDamageColorAdjust2[0] * _23427)) + (g_mDamageColorAdjust3[0] * _23428)) + (g_mDamageColorAdjust4[0] * _23429), (((g_mDamageColorAdjust1[1] * _9306) + (g_mDamageColorAdjust2[1] * _23427)) + (g_mDamageColorAdjust3[1] * _23428)) + (g_mDamageColorAdjust4[1] * _23429), (((g_mDamageColorAdjust1[2] * _9306) + (g_mDamageColorAdjust2[2] * _23427)) + (g_mDamageColorAdjust3[2] * _23428)) + (g_mDamageColorAdjust4[2] * _23429), (((g_mDamageColorAdjust1[3] * _9306) + (g_mDamageColorAdjust2[3] * _23427)) + (g_mDamageColorAdjust3[3] * _23428)) + (g_mDamageColorAdjust4[3] * _23429))).xyz, _2).xyz * 1.0).xyz;
                break;
            } while(false);
            _10658 = mix(_14273.xyz, _11573, vec3(_13694 ? _21709 : 1.0));
            _7078 = vec4((vec4(vec4(_10658.xyz, 1.0).xyz, 1.0) * _19935).xyz, 1.0).xyz;
            vec2 _23650 = _23299.xz * _17208;
            _9596 = _23650;
            _9596.y = mix(_23650.x, _23650.y, _17207);
        }
        bool _12914;
        if (_14875)
        {
            _12914 = g_bPatternPaintLayer != 0;
        }
        else
        {
            _12914 = false;
        }
        vec3 _13149;
        float _16316;
        float _16480;
        float _17327;
        float _17328;
        vec3 _17329;
        vec2 _17330;
        vec3 _17331;
        float _17332;
        float _17333;
        if (_12914)
        {
            float _24063 = _24878.w * (_14876 ? _21709 : 1.0);
            vec3 _12121 = vec3(_24063);
            vec3 _10574 = mix(_14273, _24878.xyz, _12121);
            float _13148;
            vec3 _16315;
            float _16479;
            vec3 _17324;
            float _17325;
            float _17326;
            if (_14874)
            {
                float _9808 = clamp(_9716 - g_fPatternTranslucencyThreshold, 0.0, 1.0) * _24063;
                vec3 _22235 = _7244 + (vec3(0.0, 0.0, 1.0) * _9716);
                vec3 _23794 = normalize((vIn5.xyz * 1.0).xyz).xyz;
                vec3 _9001 = normalize(mix(_23794, _23794 + normalize(cross(dFdy(_22235), dFdx(_22235))).xyz, vec3((g_fPatternEmboss * _24063) * _5625))).xyz;
                vec2 _15752 = mix(_14854, normalize(vec3(vec2(_16785, _11178), (1.0 - abs(_16785)) - abs(_11178))), _12121).xy + vec3(dot(_9001, vIn6.xyz), dot(_9001, _20527.xyz), _3).xy;
                vec3 _20488;
                _20488.x = _15752.x;
                _20488.y = _15752.y;
                _13148 = _22892 + ((g_fPatternEmboss < 0.0) ? 0.0 : _9808);
                _16315 = _20488;
                _17324 = mix(_10574, _24878.xyz, _12121);
                _17325 = mix(_17204, 0.0, _9808);
                _17326 = mix(_17205, 0.00999999977648258209228515625, _9808);
                _16479 = mix(_17206, max(0.0, g_fPatternEmboss), _9808);
            }
            else
            {
                _13148 = _22892;
                _16315 = _14854;
                _17324 = _10658;
                _17325 = _17204;
                _17326 = _17205;
                _16479 = _17206;
            }
            _13149 = _10574;
            _16316 = _13148;
            _17327 = mix(_16973, _20706.x, _24063);
            _17328 = mix(_8530, g_fPatternCloth, _24063);
            _17329 = _16315;
            _17330 = mix(_23299.xz, vec2(_20706.y), vec2(_24063));
            _17331 = _17324;
            _17332 = _17325;
            _17333 = _17326;
            _16480 = _16479;
        }
        else
        {
            _13149 = _14273;
            _16316 = _22892;
            _17327 = _16973;
            _17328 = _8530;
            _17329 = _14854;
            _17330 = _23299.xz;
            _17331 = _10658;
            _17332 = _17204;
            _17333 = _17205;
            _16480 = _17206;
        }
        _13150 = _13149;
        _16317 = _23992;
        _17334 = _13559;
        _17335 = _16316;
        _17336 = _17327;
        _17337 = _17328;
        _17338 = _17329;
        _17339 = _17330;
        _17340 = _13143;
        _17342 = _16308;
        _17343 = _18503;
        _17344 = _12900;
        _17345 = _16297;
        _17346 = _22893;
        _17347 = _8531;
        _17354 = _6536;
        _17355 = _17190;
        _17356 = _17191;
        _17357 = _17331;
        _17358 = _7078;
        _17359 = _17192;
        _17360 = _17332;
        _17361 = _9596;
        _17362 = _17193;
        _17363 = _17194;
        _17364 = _17195;
        _17365 = _17333;
        _17366 = _17209;
        _17367 = _17196;
        _17368 = _17197;
        _17369 = _17198;
        _17370 = _16480;
        _17371 = _17199;
        _17372 = _17200;
        _17373 = _17201;
        _13998 = _17202;
        _23300 = _17203;
        break;
    } while(false);
    vec4 _19374 = texture(g_tObjectProperties_s1, vIn0.xy);
    float _14499 = _17335 - _17346;
    float _23339 = ((((2.0 - ((g_fWearProgress * (_17363.y - _17363.x)) + _17363.x)) - _17359) - _19374.y) - _17335) + _14499;
    float _17421 = smoothstep(-_17360, _17360, (_23339 * _14499) / _17360);
    float _6540 = max(min(_17335, clamp(_23339, 0.0, 1.0)), _17346);
    float _15773 = _23339 / _17365;
    float _10873 = smoothstep(1.0 + _17365, 1.0 - _17365, _15773);
    float _22419 = clamp(_15773, 0.0, 1.0);
    float _8519 = clamp((g_fWearProgress - 1.0) + _19374.z, 0.0, 1.0) * (_6540 + g_fWearProgress);
    float _10058 = smoothstep(_17355.x, _17355.y, _8519);
    float _7769 = clamp(_8519, 0.0, 1.0);
    float _20239 = _19374.x * mix(mix(_17345, _17334, _17421) * clamp(1.0 - ((((clamp((_6540 + 0.00999999977648258209228515625) / _17360, 0.0, 1.0) * (1.0 - clamp((_6540 - 0.00999999977648258209228515625) / _17360, 0.0, 1.0))) * _17421) * _17335) * 0.75), 0.0, 1.0), 1.0, _10058);
    vec3 _9818 = mix(_17343, _17344, vec3(_10058));
    vec3 _12925 = vec3(smoothstep(_17340.x, _17340.y, _8519));
    vec4 _19375 = texture(g_tNormal_s1, vIn0.xy);
    float _16000 = _19375.x;
    float _19720 = _19375.y;
    float _16786 = (_16000 + _19720) - 1.00392162799835205078125;
    float _11179 = _16000 - _19720;
    vec3 _19308 = normalize(vec3(vec2(_16786, _11179), (1.0 - abs(_16786)) - abs(_11179)));
    float _20108 = mix(1.0, _17373, _7769);
    vec2 _22350 = vec2(_17421);
    vec2 _23011 = _19308.xy + (mix(_23430, _17338.xy, _22350) * _20108);
    vec3 _24090 = _20527.xyz;
    vec3 _8665 = _7244 + (vec3(0.0, 0.0, 1.0) * _15773);
    vec3 _10113 = dFdx(_8665);
    vec3 _19987 = dFdy(_8665);
    vec3 _23795 = normalize((((vIn6.xyz * _23011.x).xyz + (_24090 * _23011.y)).xyz + (vIn5.xyz * _19308.z)).xyz).xyz;
    vec3 _6524 = normalize(mix(_23795, _23795 + normalize(cross(_19987, _10113)).xyz, vec3(((((smoothstep(-_17365, _17365, _15773) * _10873) * _20108) * _17370) * _5625) * _14499)));
    vec3 _10312 = _6524.xyz;
    float _18095 = dot(_10312, vIn6.xyz);
    float _6548 = dot(_10312, _24090);
    float _16293 = _6524.z;
    vec2 _18006 = mix(_13192.xz, mix(_17339.xy, _17361.xy, vec2(_10873)), _22350).xy * mix(1.0, mix(_23300, _13998, _22419), _7769);
    float _11267 = (_6540 * _20239) * (g_fWearProgress * 2.0);
    float _19211 = mix(smoothstep(_17356.x, _17356.y, _11267), smoothstep(_17342.x, _17342.y, _11267), mix(_17421, 1.0 - _10873, _17368)) * (1.0 - min(_18006.x, _18006.y));
    float _13429 = mix(_19211, max(_19211, _17372), _7769) * _17362.w;
    vec2 _14940 = mix(_18006.xy, _18006.xx * _17364, vec2(_13429));
    float _20536 = _14940.x;
    float _7253 = _14940.y;
    float _9119 = mix(mix(_17354, mix(_17336, _17366, _10873), _17421), _17369, _7769) * (1.0 - _13429);
    float _8280 = mix(mix(_17347, mix(_17337, _17367, _10873), _17421), _17371, _7769) * (1.0 - _9119);
    vec4 _6805;
    if (g_nOutputMode == 0)
    {
        _6805 = vec4(mix(mix(_9818, mix(mix(_13150, _16317, _12925), mix(mix(_17357, _17358, _12925), _9818, vec3(_17368 * (1.0 - _22419))), vec3(_10873)), vec3(_17421)).xyz, _17362.xyz, vec3(_13429)).xyz, 1.0);
    }
    else
    {
        vec4 _12505;
        if (g_nOutputMode == 1)
        {
            vec3 _16929 = vec3(_18095, _6548, _16293).xyz / vec3((abs(_18095) + abs(_6548)) + abs(_16293));
            float _10674 = _16929.x;
            float _23725 = _16929.y;
            vec2 _21979 = (vec2(_10674 + _23725, _10674 - _23725) * 0.5) + vec2(0.5);
            vec3 _16636 = vec3(_21979.xy, _20536).xyz;
            vec3 _10600 = _16636 * vec3(0.077399380505084991455078125);
            vec3 _7709 = pow((_16636 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
            float _21354;
            if (_21979.x <= 0.040449999272823333740234375)
            {
                _21354 = _10600.x;
            }
            else
            {
                _21354 = _7709.x;
            }
            float _23037;
            if (_21979.y <= 0.040449999272823333740234375)
            {
                _23037 = _10600.y;
            }
            else
            {
                _23037 = _7709.y;
            }
            float _19477;
            if (_20536 <= 0.040449999272823333740234375)
            {
                _19477 = _10600.z;
            }
            else
            {
                _19477 = _7709.z;
            }
            _12505 = vec4(vec3(_21354, _23037, _19477), _7253);
        }
        else
        {
            vec4 _12503;
            if (g_nOutputMode == 2)
            {
                vec3 _20866 = vec3(0.0, _9119, _8280).xyz;
                vec3 _10599 = _20866 * vec3(0.077399380505084991455078125);
                vec3 _7708 = pow((_20866 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                float _23036;
                if (_9119 <= 0.040449999272823333740234375)
                {
                    _23036 = _10599.y;
                }
                else
                {
                    _23036 = _7708.y;
                }
                float _19476;
                if (_8280 <= 0.040449999272823333740234375)
                {
                    _19476 = _10599.z;
                }
                else
                {
                    _19476 = _7708.z;
                }
                _12503 = vec4(vec3(_10599.x, _23036, _19476), 1.0);
            }
            else
            {
                vec4 _12502;
                if (g_nOutputMode == 3)
                {
                    vec3 _20865 = vec3(_20239).xyz;
                    vec3 _10598 = _20865 * vec3(0.077399380505084991455078125);
                    vec3 _9358 = pow((_20865 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                    bool _17061 = _20239 <= 0.040449999272823333740234375;
                    float _12915;
                    if (_17061)
                    {
                        _12915 = _10598.x;
                    }
                    else
                    {
                        _12915 = _9358.x;
                    }
                    float _12916;
                    if (_17061)
                    {
                        _12916 = _10598.y;
                    }
                    else
                    {
                        _12916 = _9358.y;
                    }
                    float _19475;
                    if (_17061)
                    {
                        _19475 = _10598.z;
                    }
                    else
                    {
                        _19475 = _9358.z;
                    }
                    _12502 = vec4(vec3(_12915, _12916, _19475), 1.0);
                }
                else
                {
                    vec4 _12501;
                    if (g_nOutputMode == 4)
                    {
                        vec3 _16635 = vec3(_14940.xy, 0.0).xyz;
                        vec3 _10597 = _16635 * vec3(0.077399380505084991455078125);
                        vec3 _9357 = pow((_16635 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                        float _23035;
                        if (_20536 <= 0.040449999272823333740234375)
                        {
                            _23035 = _10597.x;
                        }
                        else
                        {
                            _23035 = _9357.x;
                        }
                        float _19302;
                        if (_7253 <= 0.040449999272823333740234375)
                        {
                            _19302 = _10597.y;
                        }
                        else
                        {
                            _19302 = _9357.y;
                        }
                        _12501 = vec4(vec3(_23035, _19302, _10597.z), 1.0);
                    }
                    else
                    {
                        _12501 = vec4(0.5, 0.5, 0.5, 1.0);
                    }
                    _12502 = _12501;
                }
                _12503 = _12502;
            }
            _12505 = _12503;
        }
        _6805 = _12505;
    }
    outColor = _6805;
}

`,uniforms:[{name:`g_bPattern`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_nOutputMode`,glsl:`int`,type:5,fdef:[],idef:[0,0,0,0]},{name:`g_mSurfaceColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale1`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness1`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask1`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate1`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale1`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale2`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness2`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask2`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate2`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale2`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale3`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness3`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask3`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate3`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale3`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale4`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness4`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask4`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate4`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale4`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_bPatternPaintLayer`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_bPatternPaintEmboss`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fPatternTranslucencyThreshold`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_fPatternPaintRespectsTintMask`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fPatternCloth`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fPatternEmboss`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fPuffyPaintNormalSoftness`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternRoughnessContrastBrightness`,glsl:`vec2`,type:2,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstratePatternMipBias`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fWearProgress`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]}],samplers:[{uniform:`g_tLayerId_s3`,param:`g_tLayerId`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tNormal_s1`,param:`g_tNormal`,srgb:0,slot:1,filter:85,address:0},{uniform:`g_tObjectProperties_s1`,param:`g_tObjectProperties`,srgb:0,slot:1,filter:85,address:0},{uniform:`g_tPatternProperties_s3`,param:`g_tPatternProperties`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tPattern_s3`,param:`g_tPattern`,srgb:1,slot:3,filter:21,address:0},{uniform:`g_tDamage_s3`,layers:[`g_tDamage1`,`g_tDamage2`,`g_tDamage3`,`g_tDamage4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tGrime_s3`,layers:[`g_tGrime1`,`g_tGrime2`,`g_tGrime3`,`g_tGrime4`],srgb:1,slot:3,filter:21,address:0},{uniform:`g_tSubstrateNormal_s3`,layers:[`g_tSubstrateNormal1`,`g_tSubstrateNormal2`,`g_tSubstrateNormal3`,`g_tSubstrateNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSubstrateProperties_s3`,layers:[`g_tSubstrateProperties1`,`g_tSubstrateProperties2`,`g_tSubstrateProperties3`,`g_tSubstrateProperties4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSubstrate_s3`,layers:[`g_tSubstrate1`,`g_tSubstrate2`,`g_tSubstrate3`,`g_tSubstrate4`],srgb:1,slot:3,filter:21,address:0},{uniform:`g_tSurfaceNormal_s3`,layers:[`g_tSurfaceNormal1`,`g_tSurfaceNormal2`,`g_tSurfaceNormal3`,`g_tSurfaceNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSurfaceProperties_s3`,layers:[`g_tSurfaceProperties1`,`g_tSurfaceProperties2`,`g_tSurfaceProperties3`,`g_tSurfaceProperties4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSurface_s3`,layers:[`g_tSurface1`,`g_tSurface2`,`g_tSurface3`,`g_tSurface4`],srgb:1,slot:3,filter:21,address:0}],inputs:[[0,`vec4`],[1,`vec4`],[2,`vec4`],[3,`vec4`],[4,`vec4`],[5,`vec3`],[6,`vec4`]]},newtint:{fs:`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
uniform sampler2D g_tLayerId_s3;
uniform sampler2D g_tNormal_s1;
uniform sampler2D g_tObjectProperties_s1;
uniform sampler2D g_tPatternProperties_s3;
uniform sampler2D g_tPattern_s3;
uniform sampler2D g_tTintId_s0;
uniform sampler2DArray g_tDamage_s3;
uniform sampler2DArray g_tGrime_s3;
uniform sampler2DArray g_tSubstrateNormal_s3;
uniform sampler2DArray g_tSubstrateProperties_s3;
uniform sampler2DArray g_tSubstrate_s3;
uniform sampler2DArray g_tSurfaceNormal_s3;
uniform sampler2DArray g_tSurfaceProperties_s3;
uniform sampler2DArray g_tSurface_s3;
const vec2 _1555[9] = vec2[](vec2(-1.0), vec2(0.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 0.0), vec2(0.0), vec2(1.0, 0.0), vec2(-1.0, 1.0), vec2(0.0, 1.0), vec2(1.0));
float _2;
float _3;
vec3 _4;

uniform int g_bPattern;
uniform int g_nOutputMode;
uniform mat4 g_mSurfaceColorAdjust1;
uniform mat4 g_mSubstrateColorAdjust1;
uniform float g_fSubstrateCompositeColorTranslucency1;
uniform float g_fDamageUvScale1;
uniform float g_fDamageHeightBlendSoftness1;
uniform vec2 g_vDamageMinMax1;
uniform int g_bDamageBevelUseTintMask1;
uniform mat4 g_mDamageColorAdjust1;
uniform float g_fDamageBevelBlendSoftness1;
uniform float g_fDamageBevelEmboss1;
uniform float g_fDamageBevelRoughnessBrightness1;
uniform float g_fDamageBevelAnisotropy1;
uniform float g_fDamageBevelMetalness1;
uniform float g_fDamageBevelCloth1;
uniform int g_bDamageBevelBlendToSubstrate1;
uniform float g_fBurnishingMetalness1;
uniform float g_fBurnishingCloth1;
uniform mat4 g_mSurfaceBurnishingColorAdjust1;
uniform mat4 g_mSubstrateBurnishingColorAdjust1;
uniform float g_fBurnishingNormalScale1;
uniform float g_fSurfaceBurnishingRoughnessBrightness1;
uniform float g_fSubstrateBurnishingRoughnessBrightness1;
uniform vec2 g_vSurfaceBurnishingMinMax1;
uniform vec2 g_vSubstrateBurnishingMinMax1;
uniform float g_fGrimeUvScale1;
uniform float g_fGrimeTranslucency1;
uniform float g_fGrimeRoughnessBrightness1;
uniform vec2 g_vSurfaceGrimeMinMax1;
uniform vec2 g_vSubstrateGrimeMinMax1;
uniform float g_fBurnishingGrime1;
uniform mat4 g_mSurfaceColorAdjust2;
uniform mat4 g_mSubstrateColorAdjust2;
uniform float g_fSubstrateCompositeColorTranslucency2;
uniform float g_fDamageUvScale2;
uniform float g_fDamageHeightBlendSoftness2;
uniform vec2 g_vDamageMinMax2;
uniform int g_bDamageBevelUseTintMask2;
uniform mat4 g_mDamageColorAdjust2;
uniform float g_fDamageBevelBlendSoftness2;
uniform float g_fDamageBevelEmboss2;
uniform float g_fDamageBevelRoughnessBrightness2;
uniform float g_fDamageBevelAnisotropy2;
uniform float g_fDamageBevelMetalness2;
uniform float g_fDamageBevelCloth2;
uniform int g_bDamageBevelBlendToSubstrate2;
uniform float g_fBurnishingMetalness2;
uniform float g_fBurnishingCloth2;
uniform mat4 g_mSurfaceBurnishingColorAdjust2;
uniform mat4 g_mSubstrateBurnishingColorAdjust2;
uniform float g_fBurnishingNormalScale2;
uniform float g_fSurfaceBurnishingRoughnessBrightness2;
uniform float g_fSubstrateBurnishingRoughnessBrightness2;
uniform vec2 g_vSurfaceBurnishingMinMax2;
uniform vec2 g_vSubstrateBurnishingMinMax2;
uniform float g_fGrimeUvScale2;
uniform float g_fGrimeTranslucency2;
uniform float g_fGrimeRoughnessBrightness2;
uniform vec2 g_vSurfaceGrimeMinMax2;
uniform vec2 g_vSubstrateGrimeMinMax2;
uniform float g_fBurnishingGrime2;
uniform mat4 g_mSurfaceColorAdjust3;
uniform mat4 g_mSubstrateColorAdjust3;
uniform float g_fSubstrateCompositeColorTranslucency3;
uniform float g_fDamageUvScale3;
uniform float g_fDamageHeightBlendSoftness3;
uniform vec2 g_vDamageMinMax3;
uniform int g_bDamageBevelUseTintMask3;
uniform mat4 g_mDamageColorAdjust3;
uniform float g_fDamageBevelBlendSoftness3;
uniform float g_fDamageBevelEmboss3;
uniform float g_fDamageBevelRoughnessBrightness3;
uniform float g_fDamageBevelAnisotropy3;
uniform float g_fDamageBevelMetalness3;
uniform float g_fDamageBevelCloth3;
uniform int g_bDamageBevelBlendToSubstrate3;
uniform float g_fBurnishingMetalness3;
uniform float g_fBurnishingCloth3;
uniform mat4 g_mSurfaceBurnishingColorAdjust3;
uniform mat4 g_mSubstrateBurnishingColorAdjust3;
uniform float g_fBurnishingNormalScale3;
uniform float g_fSurfaceBurnishingRoughnessBrightness3;
uniform float g_fSubstrateBurnishingRoughnessBrightness3;
uniform vec2 g_vSurfaceBurnishingMinMax3;
uniform vec2 g_vSubstrateBurnishingMinMax3;
uniform float g_fGrimeUvScale3;
uniform float g_fGrimeTranslucency3;
uniform float g_fGrimeRoughnessBrightness3;
uniform vec2 g_vSurfaceGrimeMinMax3;
uniform vec2 g_vSubstrateGrimeMinMax3;
uniform float g_fBurnishingGrime3;
uniform mat4 g_mSurfaceColorAdjust4;
uniform mat4 g_mSubstrateColorAdjust4;
uniform float g_fSubstrateCompositeColorTranslucency4;
uniform float g_fDamageUvScale4;
uniform float g_fDamageHeightBlendSoftness4;
uniform vec2 g_vDamageMinMax4;
uniform int g_bDamageBevelUseTintMask4;
uniform mat4 g_mDamageColorAdjust4;
uniform float g_fDamageBevelBlendSoftness4;
uniform float g_fDamageBevelEmboss4;
uniform float g_fDamageBevelRoughnessBrightness4;
uniform float g_fDamageBevelAnisotropy4;
uniform float g_fDamageBevelMetalness4;
uniform float g_fDamageBevelCloth4;
uniform int g_bDamageBevelBlendToSubstrate4;
uniform float g_fBurnishingMetalness4;
uniform float g_fBurnishingCloth4;
uniform mat4 g_mSurfaceBurnishingColorAdjust4;
uniform mat4 g_mSubstrateBurnishingColorAdjust4;
uniform float g_fBurnishingNormalScale4;
uniform float g_fSurfaceBurnishingRoughnessBrightness4;
uniform float g_fSubstrateBurnishingRoughnessBrightness4;
uniform vec2 g_vSurfaceBurnishingMinMax4;
uniform vec2 g_vSubstrateBurnishingMinMax4;
uniform float g_fGrimeUvScale4;
uniform float g_fGrimeTranslucency4;
uniform float g_fGrimeRoughnessBrightness4;
uniform vec2 g_vSurfaceGrimeMinMax4;
uniform vec2 g_vSubstrateGrimeMinMax4;
uniform float g_fBurnishingGrime4;
uniform vec4 g_vId1Color;
uniform vec4 g_vId2Color;
uniform vec4 g_vId3Color;
uniform vec4 g_vId4Color;
uniform vec4 g_vId5Color;
uniform vec4 g_vId6Color;
uniform vec4 g_vId7Color;
uniform vec4 g_vId8Color;
uniform int g_bPatternPaintLayer;
uniform int g_bPatternPaintEmboss;
uniform float g_fPatternTranslucencyThreshold;
uniform int g_fPatternPaintRespectsTintMask;
uniform float g_fPatternCloth;
uniform float g_fPatternEmboss;
uniform float g_fPuffyPaintNormalSoftness;
uniform vec2 g_vPatternRoughnessContrastBrightness;
uniform float g_fSubstratePatternMipBias;
uniform int g_bId1Pattern;
uniform int g_bId2Pattern;
uniform int g_bId3Pattern;
uniform int g_bId4Pattern;
uniform int g_bId5Pattern;
uniform int g_bId6Pattern;
uniform int g_bId7Pattern;
uniform int g_bId8Pattern;
uniform float g_fWearProgress;


in vec4 vIn0;
in vec4 vIn1;
in vec4 vIn2;
in vec4 vIn3;
in vec4 vIn4;
in vec3 vIn5;
in vec4 vIn6;
out vec4 outColor;

void main()
{
    vec3 _7244 = vec3(vIn0.x, 1.0 - vIn0.y, 1.0);
    vec3 _20527 = cross(vIn5.xyz, vIn6.xyz) * ((vIn6.w > 0.0) ? 1.0 : (-1.0));
    float _5271[8] = float[](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    float _23436 = dFdx(vIn0.x);
    float _19160 = dFdy(vIn0.y);
    float _5625 = 0.00048828125 / max(_23436, _19160);
    vec4 _19372 = texture(g_tLayerId_s3, vIn0.xy);
    float _15088 = _19372.x;
    float _12846 = (_19372.z + _19372.y) + _15088;
    float _12687 = max(0.0, 1.0 - _12846);
    vec4 _19317 = vec4(_15088, _19372.yz, _12687) / vec4(_12846 + _12687);
    float _20506[8] = float[](float(g_bId1Pattern != 0), float(g_bId2Pattern != 0), float(g_bId3Pattern != 0), float(g_bId4Pattern != 0), float(g_bId5Pattern != 0), float(g_bId6Pattern != 0), float(g_bId7Pattern != 0), float(g_bId8Pattern != 0));
    uvec2 _7702 = uvec2(textureSize(g_tTintId_s0, 0));
    vec2 _25155 = vec2(1.0) / vec2(float(_7702.x), float(_7702.y));
    int _21567;
    int _23854[72];
    int _13039 = 0;
    for (;;)
    {
        if (!(_13039 < 9))
        {
            break;
        }
        vec4 _20360 = texture(g_tTintId_s0, (vIn0.xy + (_1555[_13039].xy * _25155)).xy);
        int _21142 = int(ceil(_20360.x * 7.0));
        int _17040;
        int _13040 = 0;
        for (;;)
        {
            if (!(_13040 < 8))
            {
                break;
            }
            _23854[(_13040) * 9 + (_13039)] = int(_13040 == _21142);
            _17040 = _13040 + 1;
            _13040 = _17040;
            continue;
        }
        _21567 = _13039 + 1;
        _13039 = _21567;
        continue;
    }
    float _13155;
    _13155 = 0.0;
    float _13616;
    int _14722;
    int _16208 = 0;
    for (;;)
    {
        if (!(_16208 < 8))
        {
            break;
        }
        bool _12885;
        if (_23854[(_16208) * 9 + (4)] == _23854[(_16208) * 9 + (1)])
        {
            _12885 = _23854[(_16208) * 9 + (4)] == _23854[(_16208) * 9 + (7)];
        }
        else
        {
            _12885 = false;
        }
        float _21728;
        if (_12885)
        {
            _21728 = float(_23854[(_16208) * 9 + (4)]);
        }
        else
        {
            bool _12886;
            if (_23854[(_16208) * 9 + (4)] == _23854[(_16208) * 9 + (3)])
            {
                _12886 = _23854[(_16208) * 9 + (4)] == _23854[(_16208) * 9 + (5)];
            }
            else
            {
                _12886 = false;
            }
            float _12501;
            if (_12886)
            {
                _12501 = float(_23854[(_16208) * 9 + (4)]);
            }
            else
            {
                _12501 = ((0.03125 * float(((_23854[(_16208) * 9 + (0)] + _23854[(_16208) * 9 + (2)]) + _23854[(_16208) * 9 + (6)]) + _23854[(_16208) * 9 + (8)])) + (0.09375 * float(((_23854[(_16208) * 9 + (2)] + _23854[(_16208) * 9 + (3)]) + _23854[(_16208) * 9 + (5)]) + _23854[(_16208) * 9 + (7)]))) + (0.5 * float(_23854[(_16208) * 9 + (4)]));
            }
            _21728 = _12501;
        }
        _5271[_16208] = _21728;
        _13616 = _13155 + (_20506[_16208] * _21728);
        _14722 = _16208 + 1;
        _13155 = _13616;
        _16208 = _14722;
        continue;
    }
    float _7021 = dFdx(vIn2.x);
    float _14684 = dFdx(vIn2.y);
    vec2 _7272 = vec2(_7021, _14684);
    float _19730 = dFdy(vIn2.x);
    float _11417 = dFdy(vIn2.y);
    vec2 _24870 = vec2(_19730, _11417);
    float _12659 = dFdx(vIn2.z);
    float _14685 = dFdx(vIn2.w);
    vec2 _7273 = vec2(_12659, _14685);
    float _19731 = dFdy(vIn2.z);
    float _11418 = dFdy(vIn2.w);
    vec2 _24871 = vec2(_19731, _11418);
    float _12660 = dFdx(vIn3.x);
    float _14686 = dFdx(vIn3.y);
    vec2 _7274 = vec2(_12660, _14686);
    float _19732 = dFdy(vIn3.x);
    float _11419 = dFdy(vIn3.y);
    vec2 _24872 = vec2(_19732, _11419);
    float _12661 = dFdx(vIn3.z);
    float _14687 = dFdx(vIn3.w);
    vec2 _7275 = vec2(_12661, _14687);
    float _19733 = dFdy(vIn3.z);
    float _11420 = dFdy(vIn3.w);
    vec2 _24414 = vec2(_19733, _11420);
    float _9306 = _19317.x;
    bool _9694 = _9306 > 0.0;
    vec4 _6223;
    vec2 _13136;
    vec4 _13189;
    if (_9694)
    {
        _13136 = textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.xy, 0.0), (_7272 * g_fPuffyPaintNormalSoftness).xy, (_24870 * g_fPuffyPaintNormalSoftness).xy).wy * _9306;
        _13189 = textureGrad(g_tSubstrateNormal_s3, vec3(vIn2.xy, 0.0), _7272, _24870).xyzw * _9306;
        _6223 = textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.xy, 0.0), _7272, _24870).xyzw * _9306;
    }
    else
    {
        _13136 = vec2(0.0);
        _13189 = vec4(0.0);
        _6223 = vec4(0.0);
    }
    float _23427 = _19317.y;
    bool _17155 = _23427 > 0.0;
    vec4 _6224;
    vec2 _13137;
    vec4 _13190;
    if (_17155)
    {
        _13137 = _13136.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.zw, 1.0), (_7273 * g_fPuffyPaintNormalSoftness).xy, (_24871 * g_fPuffyPaintNormalSoftness).xy).wy * _23427);
        _13190 = _13189.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn2.zw, 1.0), _7273, _24871).xyzw * _23427);
        _6224 = _6223.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn2.zw, 1.0), _7273, _24871).xyzw * _23427);
    }
    else
    {
        _13137 = _13136;
        _13190 = _13189;
        _6224 = _6223;
    }
    float _23428 = _19317.z;
    bool _17156 = _23428 > 0.0;
    vec4 _6225;
    vec2 _13138;
    vec4 _13191;
    if (_17156)
    {
        _13138 = _13137.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.xy, 2.0), (_7274 * g_fPuffyPaintNormalSoftness).xy, (_24872 * g_fPuffyPaintNormalSoftness).xy).wy * _23428);
        _13191 = _13190.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn3.xy, 2.0), _7274, _24872).xyzw * _23428);
        _6225 = _6224.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.xy, 2.0), _7274, _24872).xyzw * _23428);
    }
    else
    {
        _13138 = _13137;
        _13191 = _13190;
        _6225 = _6224;
    }
    float _23429 = _19317.w;
    bool _17157 = _23429 > 0.0;
    vec2 _13139;
    vec4 _13192;
    vec4 _23299;
    if (_17157)
    {
        _13139 = _13138.xy + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.zw, 3.0), (_7275 * g_fPuffyPaintNormalSoftness).xy, (_24414 * g_fPuffyPaintNormalSoftness).xy).wy * _23429);
        _13192 = _13191.xyzw + (textureGrad(g_tSubstrateNormal_s3, vec3(vIn3.zw, 3.0), _7275, _24414).xyzw * _23429);
        _23299 = _6225.xyzw + (textureGrad(g_tSurfaceNormal_s3, vec3(vIn3.zw, 3.0), _7275, _24414).xyzw * _23429);
    }
    else
    {
        _13139 = _13138;
        _13192 = _13191;
        _23299 = _6225;
    }
    vec2 _23430;
    float _16783 = (_23299.w + _23299.y) - 1.00392162799835205078125;
    float _11176 = _23299.w - _23299.y;
    vec3 _14854 = normalize(vec3(vec2(_16783, _11176), (1.0 - abs(_16783)) - abs(_11176)));
    float _16784 = (_13192.w + _13192.y) - 1.00392162799835205078125;
    float _11177 = _13192.w - _13192.y;
    float _16785 = (_13139.x + _13139.y) - 1.00392162799835205078125;
    float _11178 = _13139.x - _13139.y;
    vec3 _13150;
    float _13998;
    vec3 _16322;
    float _17340;
    float _17342;
    float _17343;
    float _17344;
    vec3 _17345;
    vec2 _17346;
    vec2 _17347;
    vec2 _17354;
    vec3 _17355;
    vec3 _17356;
    float _17357;
    float _17358;
    float _17359;
    float _17360;
    vec2 _17361;
    vec2 _17362;
    vec3 _17363;
    vec3 _17364;
    float _17365;
    float _17366;
    vec2 _17367;
    vec4 _17368;
    vec2 _17369;
    float _17370;
    float _17371;
    float _17372;
    float _17373;
    float _17374;
    float _17375;
    float _17378;
    float _17379;
    float _17380;
    float _17381;
    float _23300;
    do
    {
        vec2 _25090 = (vIn1.xy - (vIn1.zw * _14854.xy)).xy;
        vec4 _22452 = texture(g_tPattern_s3, _25090);
        vec4 _20706 = texture(g_tPatternProperties_s3, _25090);
        _23430 = normalize(vec3(vec2(_16784, _11177), (1.0 - abs(_16784)) - abs(_11177))).xy;
        vec4 _19373 = texture(g_tPattern_s3, (vIn1.xy - (vIn1.zw * _23430)).xy, g_fSubstratePatternMipBias);
        float _24623 = _22452.w;
        bool _14874 = g_bPatternPaintEmboss != 0;
        float _9716;
        vec4 _24878;
        if (_14874)
        {
            vec4 _9250 = _22452;
            _9250.w = smoothstep(g_fPatternTranslucencyThreshold, g_fPatternTranslucencyThreshold + 0.039999999105930328369140625, _24623);
            _9716 = clamp((_24623 * (1.0 + g_fPatternTranslucencyThreshold)) - g_fPatternTranslucencyThreshold, 0.0, 1.0);
            _24878 = _9250;
        }
        else
        {
            _9716 = _24623;
            _24878 = _22452;
        }
        vec4 _9863 = (((((((vec4(g_vId1Color.xyz * g_vId1Color.w, g_vId1Color.w) * _5271[0]).xyzw + (vec4(g_vId2Color.xyz * g_vId2Color.w, g_vId2Color.w) * _5271[1])).xyzw + (vec4(g_vId3Color.xyz * g_vId3Color.w, g_vId3Color.w) * _5271[2])).xyzw + (vec4(g_vId4Color.xyz * g_vId4Color.w, g_vId4Color.w) * _5271[3])).xyzw + (vec4(g_vId5Color.xyz * g_vId5Color.w, g_vId5Color.w) * _5271[4])).xyzw + (vec4(g_vId6Color.xyz * g_vId6Color.w, g_vId6Color.w) * _5271[5])).xyzw + (vec4(g_vId7Color.xyz * g_vId7Color.w, g_vId7Color.w) * _5271[6])).xyzw;
        vec4 _23647 = _9863 + (vec4(g_vId8Color.xyz * g_vId8Color.w, g_vId8Color.w) * _5271[7]);
        float _14212 = _23647.w;
        vec4 _21709;
        if (_14212 > 0.0)
        {
            vec3 _8908 = _23647.xyz / vec3(_14212);
            vec4 _22905 = _23647;
            _22905.x = _8908.x;
            _22905.y = _8908.y;
            _22905.z = _8908.z;
            _21709 = _22905;
        }
        else
        {
            vec4 _11077 = _23647;
            _11077.x = 1.0;
            _11077.y = 1.0;
            _11077.z = 1.0;
            _21709 = _11077;
        }
        bool _14875 = g_bPattern != 0;
        bool _12889;
        if (_14875)
        {
            _12889 = g_bPatternPaintLayer == 0;
        }
        else
        {
            _12889 = false;
        }
        float _6536;
        vec3 _7079;
        float _8530;
        float _8568;
        vec2 _9596;
        vec3 _11467;
        vec3 _12902;
        float _13560;
        bool _14876;
        float _16297;
        float _16973;
        vec3 _19312;
        vec3 _19313;
        float _22892;
        float _23574;
        vec3 _23992;
        vec2 _13143;
        vec2 _16308;
        vec2 _17193;
        vec2 _17194;
        float _17195;
        vec4 _17196;
        vec2 _17197;
        float _17198;
        float _17199;
        float _17200;
        float _17201;
        float _17202;
        float _17203;
        float _17204;
        float _17205;
        float _17206;
        float _17207;
        float _17208;
        float _17209;
        float _17212;
        float _21710;
        if (_12889)
        {
            float _10541 = float(_21709.w == 0.0);
            float _18695 = _19373.w;
            float _14946 = _13155 * _24878.w;
            float _19629;
            if (_21709.w > 0.0)
            {
                _19629 = clamp(_24878.w / _21709.w, 0.0, 1.0);
            }
            else
            {
                _19629 = _10541;
            }
            vec3 _19714 = mix(_21709.xyz, _19373.xyz, vec3(max(_10541, _18695) * _14946));
            float _14750 = max(_21709.w, _18695 * _14946);
            vec4 _12736 = vec4(_19714, _14750);
            vec3 _19715 = mix(_21709.xyz, _24878.xyz, vec3(_19629 * _14946));
            float _14615 = max(_21709.w, _24878.w * _14946);
            float _22280 = _19715.x;
            float _17341 = _19715.y;
            float _24875 = _19715.z;
            vec4 _10562 = vec4(_22280, _17341, _24875, _14615);
            float _7259 = dFdx(vIn2.x);
            float _18737 = dFdx(vIn2.y);
            float _12361 = dFdy(vIn2.x);
            float _12285 = dFdy(vIn2.y);
            float _18075 = dFdx(vIn2.z);
            float _24608 = dFdx(vIn2.w);
            float _12371 = dFdy(vIn2.z);
            float _12286 = dFdy(vIn2.w);
            float _18076 = dFdx(vIn3.x);
            float _24609 = dFdx(vIn3.y);
            float _12372 = dFdy(vIn3.x);
            float _12287 = dFdy(vIn3.y);
            float _18077 = dFdx(vIn3.z);
            float _24610 = dFdx(vIn3.w);
            float _9870 = dFdy(vIn3.z);
            float _13125 = dFdy(vIn3.w);
            vec2 _13407 = vIn4.xy * g_fDamageUvScale1;
            vec2 _13408 = vIn4.xy * g_fDamageUvScale2;
            vec2 _13409 = vIn4.xy * g_fDamageUvScale3;
            vec2 _13437 = vIn4.xy * g_fDamageUvScale4;
            float _12000 = _13407.x;
            float _23922 = dFdx(_12000);
            float _18331 = _13407.y;
            float _11100 = dFdx(_18331);
            float _12115 = dFdy(_12000);
            float _15534 = dFdy(_18331);
            float _10986 = _13408.x;
            float _12078 = dFdx(_10986);
            float _18332 = _13408.y;
            float _11101 = dFdx(_18332);
            float _12116 = dFdy(_10986);
            float _15535 = dFdy(_18332);
            float _10987 = _13409.x;
            float _12079 = dFdx(_10987);
            float _18333 = _13409.y;
            float _11102 = dFdx(_18333);
            float _12117 = dFdy(_10987);
            float _15536 = dFdy(_18333);
            float _10988 = _13437.x;
            float _12080 = dFdx(_10988);
            float _18334 = _13437.y;
            float _11103 = dFdx(_18334);
            float _12081 = dFdy(_10988);
            float _13126 = dFdy(_18334);
            vec2 _13410 = vIn4.zw * g_fGrimeUvScale1;
            vec2 _13411 = vIn4.zw * g_fGrimeUvScale2;
            vec2 _13412 = vIn4.zw * g_fGrimeUvScale3;
            vec2 _13438 = vIn4.zw * g_fGrimeUvScale4;
            float _12001 = _13410.x;
            float _23923 = dFdx(_12001);
            float _18335 = _13410.y;
            float _11104 = dFdx(_18335);
            float _12118 = dFdy(_12001);
            float _15537 = dFdy(_18335);
            float _10989 = _13411.x;
            float _12082 = dFdx(_10989);
            float _18339 = _13411.y;
            float _11105 = dFdx(_18339);
            float _12119 = dFdy(_10989);
            float _15538 = dFdy(_18339);
            float _10990 = _13412.x;
            float _12083 = dFdx(_10990);
            float _18340 = _13412.y;
            float _11106 = dFdx(_18340);
            float _12120 = dFdy(_10990);
            float _15539 = dFdy(_18340);
            float _10991 = _13438.x;
            float _12084 = dFdx(_10991);
            float _18344 = _13438.y;
            float _11107 = dFdx(_18344);
            float _15264 = dFdy(_10991);
            float _6642 = dFdy(_18344);
            float _13144;
            float _16310;
            vec2 _16866;
            float _17218;
            bool _17219;
            float _17220;
            float _17221;
            float _17222;
            float _17225;
            float _17226;
            float _17227;
            float _17228;
            float _17229;
            float _17230;
            float _17231;
            float _17232;
            float _17233;
            vec2 _17234;
            vec2 _17235;
            vec2 _17236;
            vec2 _17237;
            float _17238;
            vec4 _17239;
            float _17240;
            vec4 _17241;
            vec4 _17246;
            vec4 _17247;
            vec4 _17248;
            if (_9694)
            {
                vec2 _6262 = vec2(_7259, _18737);
                vec2 _19545 = vec2(_12361, _12285);
                _13144 = g_fBurnishingNormalScale1 * _9306;
                _16310 = g_fSurfaceBurnishingRoughnessBrightness1 * _9306;
                _17218 = g_fSubstrateBurnishingRoughnessBrightness1 * _9306;
                _17219 = g_bDamageBevelUseTintMask1 != 0;
                _17220 = g_fDamageBevelEmboss1 * _9306;
                _17221 = g_fDamageHeightBlendSoftness1 * _9306;
                _17222 = g_fDamageBevelBlendSoftness1 * _9306;
                _17225 = g_fBurnishingGrime1 * _9306;
                _17226 = g_fGrimeRoughnessBrightness1 * _9306;
                _17227 = g_fBurnishingCloth1 * _9306;
                _17228 = g_fBurnishingMetalness1 * _9306;
                _17229 = float(g_bDamageBevelBlendToSubstrate1 != 0) * _9306;
                _17230 = g_fDamageBevelCloth1 * _9306;
                _17231 = g_fDamageBevelMetalness1 * _9306;
                _17232 = g_fDamageBevelAnisotropy1 * _9306;
                _17233 = g_fDamageBevelRoughnessBrightness1 * _9306;
                _17234 = g_vSubstrateGrimeMinMax1 * _9306;
                _17235 = g_vSurfaceGrimeMinMax1 * _9306;
                _17236 = g_vSubstrateBurnishingMinMax1 * _9306;
                _17237 = g_vSurfaceBurnishingMinMax1 * _9306;
                _17238 = g_fSubstrateCompositeColorTranslucency1 * _9306;
                _17239 = vec4(textureGrad(g_tGrime_s3, vec3(_13410.xy, 0.0), vec2(_23923, _11104), vec2(_12118, _15537)).xyz * _9306, g_fGrimeTranslucency1 * _9306);
                _17240 = textureGrad(g_tDamage_s3, vec3(_13407.xy, 0.0), vec2(_23922, _11100), vec2(_12115, _15534)).x * _9306;
                _17241 = textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.xy, 0.0), _6262, _19545).xyzw * _9306;
                _17246 = textureGrad(g_tSubstrate_s3, vec3(vIn2.xy, 0.0), _6262, _19545).xyzw * _9306;
                _17247 = textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.xy, 0.0), _6262, _19545).xyzw * _9306;
                _17248 = textureGrad(g_tSurface_s3, vec3(vIn2.xy, 0.0), _6262, _19545).xyzw * _9306;
                _16866 = g_vDamageMinMax1 * _9306;
            }
            else
            {
                _13144 = 0.0;
                _16310 = 0.0;
                _17218 = 0.0;
                _17219 = false;
                _17220 = 0.0;
                _17221 = 0.0;
                _17222 = 0.0;
                _17225 = 0.0;
                _17226 = 0.0;
                _17227 = 0.0;
                _17228 = 0.0;
                _17229 = 0.0;
                _17230 = 0.0;
                _17231 = 0.0;
                _17232 = 0.0;
                _17233 = 0.0;
                _17234 = vec2(0.0);
                _17235 = vec2(0.0);
                _17236 = vec2(0.0);
                _17237 = vec2(0.0);
                _17238 = 0.0;
                _17239 = vec4(0.0);
                _17240 = 0.0;
                _17241 = vec4(0.0);
                _17246 = vec4(0.0);
                _17247 = vec4(0.0);
                _17248 = vec4(0.0);
                _16866 = vec2(0.0);
            }
            float _13145;
            float _16311;
            vec2 _16867;
            float _17249;
            bool _17250;
            float _17251;
            float _17252;
            float _17253;
            float _17257;
            float _17258;
            float _17259;
            float _17260;
            float _17261;
            float _17262;
            float _17263;
            float _17264;
            float _17265;
            vec2 _17266;
            vec2 _17267;
            vec2 _17268;
            vec2 _17270;
            float _17271;
            vec4 _17272;
            float _17273;
            vec4 _17274;
            vec4 _17275;
            vec4 _17276;
            vec4 _17277;
            if (_17155)
            {
                vec2 _16498 = vec2(_18075, _24608);
                vec2 _19548 = vec2(_12371, _12286);
                _13145 = g_fBurnishingNormalScale2 * _23427;
                _16311 = g_fSurfaceBurnishingRoughnessBrightness2 * _23427;
                _17249 = g_fSubstrateBurnishingRoughnessBrightness2 * _23427;
                _17250 = g_bDamageBevelUseTintMask2 != 0;
                _17251 = _17220 + (g_fDamageBevelEmboss2 * _23427);
                _17252 = _17221 + (g_fDamageHeightBlendSoftness2 * _23427);
                _17253 = _17222 + (g_fDamageBevelBlendSoftness2 * _23427);
                _17257 = _17225 + (g_fBurnishingGrime2 * _23427);
                _17258 = _17226 + (g_fGrimeRoughnessBrightness2 * _23427);
                _17259 = _17227 + (g_fBurnishingCloth2 * _23427);
                _17260 = _17228 + (g_fBurnishingMetalness2 * _23427);
                _17261 = _17229 + (float(g_bDamageBevelBlendToSubstrate2 != 0) * _23427);
                _17262 = _17230 + (g_fDamageBevelCloth2 * _23427);
                _17263 = _17231 + (g_fDamageBevelMetalness2 * _23427);
                _17264 = _17232 + (g_fDamageBevelAnisotropy2 * _23427);
                _17265 = _17233 + (g_fDamageBevelRoughnessBrightness2 * _23427);
                _17266 = _17234 + (g_vSubstrateGrimeMinMax2 * _23427);
                _17267 = _17235 + (g_vSurfaceGrimeMinMax2 * _23427);
                _17268 = _17236 + (g_vSubstrateBurnishingMinMax2 * _23427);
                _17270 = _17237 + (g_vSurfaceBurnishingMinMax2 * _23427);
                _17271 = _17238 + (g_fSubstrateCompositeColorTranslucency2 * _23427);
                _17272 = vec4(_17239.xyz + (textureGrad(g_tGrime_s3, vec3(_13411.xy, 1.0), vec2(_12082, _11105), vec2(_12119, _15538)).xyz * _23427), _17239.w + (g_fGrimeTranslucency2 * _23427));
                _17273 = _17240 + (textureGrad(g_tDamage_s3, vec3(_13408.xy, 1.0), vec2(_12078, _11101), vec2(_12116, _15535)).x * _23427);
                _17274 = _17241.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.zw, 1.0), _16498, _19548).xyzw * _23427);
                _17275 = _17246.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn2.zw, 1.0), _16498, _19548).xyzw * _23427);
                _17276 = _17247.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.zw, 1.0), _16498, _19548).xyzw * _23427);
                _17277 = _17248.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn2.zw, 1.0), _16498, _19548).xyzw * _23427);
                _16867 = _16866 + (g_vDamageMinMax2 * _23427);
            }
            else
            {
                _13145 = _13144;
                _16311 = _16310;
                _17249 = _17218;
                _17250 = _17219;
                _17251 = _17220;
                _17252 = _17221;
                _17253 = _17222;
                _17257 = _17225;
                _17258 = _17226;
                _17259 = _17227;
                _17260 = _17228;
                _17261 = _17229;
                _17262 = _17230;
                _17263 = _17231;
                _17264 = _17232;
                _17265 = _17233;
                _17266 = _17234;
                _17267 = _17235;
                _17268 = _17236;
                _17270 = _17237;
                _17271 = _17238;
                _17272 = _17239;
                _17273 = _17240;
                _17274 = _17241;
                _17275 = _17246;
                _17276 = _17247;
                _17277 = _17248;
                _16867 = _16866;
            }
            float _13146;
            float _16312;
            vec2 _16868;
            float _17278;
            bool _17279;
            float _17280;
            float _17281;
            float _17282;
            float _17285;
            float _17286;
            float _17287;
            float _17288;
            float _17289;
            float _17290;
            float _17291;
            float _17292;
            float _17293;
            vec2 _17294;
            vec2 _17295;
            vec2 _17296;
            vec2 _17297;
            float _17298;
            vec4 _17299;
            float _17300;
            vec4 _17301;
            vec4 _17302;
            vec4 _17303;
            vec4 _17304;
            if (_17156)
            {
                vec2 _16500 = vec2(_18076, _24609);
                vec2 _19552 = vec2(_12372, _12287);
                _13146 = g_fBurnishingNormalScale3 * _23428;
                _16312 = g_fSurfaceBurnishingRoughnessBrightness3 * _23428;
                _17278 = g_fSubstrateBurnishingRoughnessBrightness3 * _23428;
                _17279 = g_bDamageBevelUseTintMask3 != 0;
                _17280 = _17251 + (g_fDamageBevelEmboss3 * _23428);
                _17281 = _17252 + (g_fDamageHeightBlendSoftness3 * _23428);
                _17282 = _17253 + (g_fDamageBevelBlendSoftness3 * _23428);
                _17285 = _17257 + (g_fBurnishingGrime3 * _23428);
                _17286 = _17258 + (g_fGrimeRoughnessBrightness3 * _23428);
                _17287 = _17259 + (g_fBurnishingCloth3 * _23428);
                _17288 = _17260 + (g_fBurnishingMetalness3 * _23428);
                _17289 = _17261 + (float(g_bDamageBevelBlendToSubstrate3 != 0) * _23428);
                _17290 = _17262 + (g_fDamageBevelCloth3 * _23428);
                _17291 = _17263 + (g_fDamageBevelMetalness3 * _23428);
                _17292 = _17264 + (g_fDamageBevelAnisotropy3 * _23428);
                _17293 = _17265 + (g_fDamageBevelRoughnessBrightness3 * _23428);
                _17294 = _17266 + (g_vSubstrateGrimeMinMax3 * _23428);
                _17295 = _17267 + (g_vSurfaceGrimeMinMax3 * _23428);
                _17296 = _17268 + (g_vSubstrateBurnishingMinMax3 * _23428);
                _17297 = _17270 + (g_vSurfaceBurnishingMinMax3 * _23428);
                _17298 = _17271 + (g_fSubstrateCompositeColorTranslucency3 * _23428);
                _17299 = vec4(_17272.xyz + (textureGrad(g_tGrime_s3, vec3(_13412.xy, 2.0), vec2(_12083, _11106), vec2(_12120, _15539)).xyz * _23428), _17272.w + (g_fGrimeTranslucency3 * _23428));
                _17300 = _17273 + (textureGrad(g_tDamage_s3, vec3(_13409.xy, 2.0), vec2(_12079, _11102), vec2(_12117, _15536)).x * _23428);
                _17301 = _17274.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.xy, 2.0), _16500, _19552).xyzw * _23428);
                _17302 = _17275.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.xy, 2.0), _16500, _19552).xyzw * _23428);
                _17303 = _17276.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.xy, 2.0), _16500, _19552).xyzw * _23428);
                _17304 = _17277.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.xy, 2.0), _16500, _19552).xyzw * _23428);
                _16868 = _16867 + (g_vDamageMinMax3 * _23428);
            }
            else
            {
                _13146 = _13145;
                _16312 = _16311;
                _17278 = _17249;
                _17279 = _17250;
                _17280 = _17251;
                _17281 = _17252;
                _17282 = _17253;
                _17285 = _17257;
                _17286 = _17258;
                _17287 = _17259;
                _17288 = _17260;
                _17289 = _17261;
                _17290 = _17262;
                _17291 = _17263;
                _17292 = _17264;
                _17293 = _17265;
                _17294 = _17266;
                _17295 = _17267;
                _17296 = _17268;
                _17297 = _17270;
                _17298 = _17271;
                _17299 = _17272;
                _17300 = _17273;
                _17301 = _17274;
                _17302 = _17275;
                _17303 = _17276;
                _17304 = _17277;
                _16868 = _16867;
            }
            vec4 _6617;
            vec2 _13147;
            bool _13695;
            vec2 _16313;
            vec2 _17305;
            vec2 _17306;
            float _17307;
            float _17308;
            vec4 _17309;
            vec2 _17310;
            float _17311;
            float _17312;
            float _17313;
            float _17314;
            float _17315;
            float _17316;
            float _17317;
            float _17318;
            float _17319;
            float _17320;
            float _17321;
            float _17322;
            float _17323;
            float _17324;
            float _17325;
            vec4 _17326;
            vec4 _17327;
            vec4 _17328;
            if (_17157)
            {
                vec2 _16502 = vec2(_18077, _24610);
                vec2 _19556 = vec2(_9870, _13125);
                _13147 = _17297 + (g_vSurfaceBurnishingMinMax4 * _23429);
                _16313 = _17295 + (g_vSurfaceGrimeMinMax4 * _23429);
                _17305 = _17296 + (g_vSubstrateBurnishingMinMax4 * _23429);
                _17306 = _17294 + (g_vSubstrateGrimeMinMax4 * _23429);
                _17307 = _17300 + (textureGrad(g_tDamage_s3, vec3(_13437.xy, 3.0), vec2(_12080, _11103), vec2(_12081, _13126)).x * _23429);
                _17308 = _17281 + (g_fDamageHeightBlendSoftness4 * _23429);
                _17309 = vec4(_17299.xyz + (textureGrad(g_tGrime_s3, vec3(_13438.xy, 3.0), vec2(_12084, _11107), vec2(_15264, _6642)).xyz * _23429), _17299.w + (g_fGrimeTranslucency4 * _23429));
                _17310 = _16868 + (g_vDamageMinMax4 * _23429);
                _17311 = _17286 + (g_fGrimeRoughnessBrightness4 * _23429);
                _17312 = _17282 + (g_fDamageBevelBlendSoftness4 * _23429);
                _17313 = _17290 + (g_fDamageBevelCloth4 * _23429);
                _17314 = _17289 + (float(g_bDamageBevelBlendToSubstrate4 != 0) * _23429);
                _17315 = _17288 + (g_fBurnishingMetalness4 * _23429);
                _17316 = _17280 + (g_fDamageBevelEmboss4 * _23429);
                _17317 = _17287 + (g_fBurnishingCloth4 * _23429);
                _17318 = _17285 + (g_fBurnishingGrime4 * _23429);
                _17319 = g_fBurnishingNormalScale4 * _23429;
                _17320 = g_fSurfaceBurnishingRoughnessBrightness4 * _23429;
                _17321 = g_fSubstrateBurnishingRoughnessBrightness4 * _23429;
                _17322 = _17292 + (g_fDamageBevelAnisotropy4 * _23429);
                _17323 = _17293 + (g_fDamageBevelRoughnessBrightness4 * _23429);
                _17324 = _17291 + (g_fDamageBevelMetalness4 * _23429);
                _17325 = _17298 + (g_fSubstrateCompositeColorTranslucency4 * _23429);
                _17326 = _17301.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.zw, 3.0), _16502, _19556).xyzw * _23429);
                _17327 = _17302.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.zw, 3.0), _16502, _19556).xyzw * _23429);
                _17328 = _17303.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.zw, 3.0), _16502, _19556).xyzw * _23429);
                _13695 = g_bDamageBevelUseTintMask4 != 0;
                _6617 = _17304.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.zw, 3.0), _16502, _19556).xyzw * _23429);
            }
            else
            {
                _13147 = _17297;
                _16313 = _17295;
                _17305 = _17296;
                _17306 = _17294;
                _17307 = _17300;
                _17308 = _17281;
                _17309 = _17299;
                _17310 = _16868;
                _17311 = _17286;
                _17312 = _17282;
                _17313 = _17290;
                _17314 = _17289;
                _17315 = _17288;
                _17316 = _17280;
                _17317 = _17287;
                _17318 = _17285;
                _17319 = _13146;
                _17320 = _16312;
                _17321 = _17278;
                _17322 = _17292;
                _17323 = _17293;
                _17324 = _17291;
                _17325 = _17298;
                _17326 = _17301;
                _17327 = _17302;
                _17328 = _17303;
                _13695 = _17279;
                _6617 = _17304;
            }
            bool _14877 = g_fPatternPaintRespectsTintMask != 0;
            float _21712;
            if (_14877)
            {
                _21712 = _6617.w;
            }
            else
            {
                _21712 = max(_6617.w, _14946);
            }
            mat4 _19938 = mat4((((g_mSurfaceBurnishingColorAdjust1[0] * _9306) + (g_mSurfaceBurnishingColorAdjust2[0] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[0] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[0] * _23429), (((g_mSurfaceBurnishingColorAdjust1[1] * _9306) + (g_mSurfaceBurnishingColorAdjust2[1] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[1] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[1] * _23429), (((g_mSurfaceBurnishingColorAdjust1[2] * _9306) + (g_mSurfaceBurnishingColorAdjust2[2] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[2] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[2] * _23429), (((g_mSurfaceBurnishingColorAdjust1[3] * _9306) + (g_mSurfaceBurnishingColorAdjust2[3] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[3] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[3] * _23429));
            vec4 _24835 = vec4(_6617.xyz, 1.0);
            vec4 _11583 = vec4((_24835 * mat4((((g_mSurfaceColorAdjust1[0] * _9306) + (g_mSurfaceColorAdjust2[0] * _23427)) + (g_mSurfaceColorAdjust3[0] * _23428)) + (g_mSurfaceColorAdjust4[0] * _23429), (((g_mSurfaceColorAdjust1[1] * _9306) + (g_mSurfaceColorAdjust2[1] * _23427)) + (g_mSurfaceColorAdjust3[1] * _23428)) + (g_mSurfaceColorAdjust4[1] * _23429), (((g_mSurfaceColorAdjust1[2] * _9306) + (g_mSurfaceColorAdjust2[2] * _23427)) + (g_mSurfaceColorAdjust3[2] * _23428)) + (g_mSurfaceColorAdjust4[2] * _23429), (((g_mSurfaceColorAdjust1[3] * _9306) + (g_mSurfaceColorAdjust2[3] * _23427)) + (g_mSurfaceColorAdjust3[3] * _23428)) + (g_mSurfaceColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18229 = _11583.xyz;
            vec3 _16614;
            do
            {
                float _21021;
                do
                {
                    float _18474 = max(_22280, max(_17341, _24875));
                    if (_18474 == 0.0)
                    {
                        _21021 = 0.0;
                        break;
                    }
                    _21021 = (_18474 - min(_22280, min(_17341, _24875))) / _18474;
                    break;
                } while(false);
                float _12837 = dot(_10562.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23054 = max(dot(_11583.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_12837 > 0.0)
                {
                    vec3 _22575 = normalize(_10562.xyz).xyz - vec3(0.57700002193450927734375);
                    vec3 _7062 = clamp((normalize(_22575) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15715 = _7062 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16614 = mix((_18229 * mix(1.0, min(max(1.0 + (4.0 * (_12837 - 0.5)), mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17328.y) / _23054), mix(0.89999997615814208984375, 0.980000019073486328125, _17328.y) / _23054), _14615)).xyz, _7062 * (_12837 / ((_15715.x + _15715.y) + _15715.z)), vec3(clamp(_21021 * pow(abs(dot(_22575, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _14615));
                    break;
                }
                else
                {
                    _16614 = _18229;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec3 _19314 = mix(_6617.xyz, _16614, vec3(_21712));
            float _21719;
            if (_14877)
            {
                _21719 = _17327.w;
            }
            else
            {
                _21719 = max(_17327.w, _14946);
            }
            bool _6222;
            vec3 _7903;
            float _9233;
            float _12838;
            bool _15232;
            float _16315;
            float _18475;
            float _6651 = _14750 * _17325;
            vec4 _24836 = vec4(_17327.xyz, 1.0);
            vec4 _11584 = vec4((_24836 * mat4((((g_mSubstrateColorAdjust1[0] * _9306) + (g_mSubstrateColorAdjust2[0] * _23427)) + (g_mSubstrateColorAdjust3[0] * _23428)) + (g_mSubstrateColorAdjust4[0] * _23429), (((g_mSubstrateColorAdjust1[1] * _9306) + (g_mSubstrateColorAdjust2[1] * _23427)) + (g_mSubstrateColorAdjust3[1] * _23428)) + (g_mSubstrateColorAdjust4[1] * _23429), (((g_mSubstrateColorAdjust1[2] * _9306) + (g_mSubstrateColorAdjust2[2] * _23427)) + (g_mSubstrateColorAdjust3[2] * _23428)) + (g_mSubstrateColorAdjust4[2] * _23429), (((g_mSubstrateColorAdjust1[3] * _9306) + (g_mSubstrateColorAdjust2[3] * _23427)) + (g_mSubstrateColorAdjust3[3] * _23428)) + (g_mSubstrateColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18230 = _11584.xyz;
            vec3 _16615;
            do
            {
                _7903 = _12736.xyz;
                float _21022;
                do
                {
                    float _17003 = _19714.x;
                    float _10965 = _19714.y;
                    float _21521 = _19714.z;
                    _18475 = max(_17003, max(_10965, _21521));
                    _16315 = _18475 - min(_17003, min(_10965, _21521));
                    _6222 = _18475 == 0.0;
                    if (_6222)
                    {
                        _21022 = 0.0;
                        break;
                    }
                    _21022 = _16315 / _18475;
                    break;
                } while(false);
                _12838 = dot(_12736.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23055 = max(dot(_11584.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                _9233 = 4.0 * (_12838 - 0.5);
                _15232 = _12838 > 0.0;
                if (_15232)
                {
                    vec3 _22576 = normalize(_7903).xyz - vec3(0.57700002193450927734375);
                    vec3 _7063 = clamp((normalize(_22576) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15716 = _7063 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16615 = mix((_18230 * mix(1.0, min(max(1.0 + _9233, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17326.y) / _23055), mix(0.89999997615814208984375, 0.980000019073486328125, _17326.y) / _23055), _6651)).xyz, _7063 * (_12838 / ((_15716.x + _15716.y) + _15716.z)), vec3(clamp(_21022 * pow(abs(dot(_22576, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _6651));
                    break;
                }
                else
                {
                    _16615 = _18230;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec4 _11585 = vec4((_24835 * mat4((((g_mDamageColorAdjust1[0] * _9306) + (g_mDamageColorAdjust2[0] * _23427)) + (g_mDamageColorAdjust3[0] * _23428)) + (g_mDamageColorAdjust4[0] * _23429), (((g_mDamageColorAdjust1[1] * _9306) + (g_mDamageColorAdjust2[1] * _23427)) + (g_mDamageColorAdjust3[1] * _23428)) + (g_mDamageColorAdjust4[1] * _23429), (((g_mDamageColorAdjust1[2] * _9306) + (g_mDamageColorAdjust2[2] * _23427)) + (g_mDamageColorAdjust3[2] * _23428)) + (g_mDamageColorAdjust4[2] * _23429), (((g_mDamageColorAdjust1[3] * _9306) + (g_mDamageColorAdjust2[3] * _23427)) + (g_mDamageColorAdjust3[3] * _23428)) + (g_mDamageColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18231 = _11585.xyz;
            vec3 _16616;
            do
            {
                float _21023;
                do
                {
                    if (_6222)
                    {
                        _21023 = 0.0;
                        break;
                    }
                    _21023 = _16315 / _18475;
                    break;
                } while(false);
                float _17329 = max(dot(_11585.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_15232)
                {
                    vec3 _22577 = normalize(_7903).xyz - vec3(0.57700002193450927734375);
                    vec3 _7064 = clamp((normalize(_22577) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15717 = _7064 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16616 = mix((_18231 * mix(1.0, min(max(1.0 + _9233, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17324) / _17329), mix(0.89999997615814208984375, 0.980000019073486328125, _17324) / _17329), _6651)).xyz, _7064 * (_12838 / ((_15717.x + _15717.y) + _15717.z)), vec3(clamp(_21023 * pow(abs(dot(_22577, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _6651));
                    break;
                }
                else
                {
                    _16616 = _18231;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            vec3 _11468 = mix(_19314.xyz, _16616, vec3(_13695 ? _21712 : 1.0));
            vec2 _23651 = _23299.xz * _17323;
            _23651.y = mix(_23651.x, _23651.y, _17322);
            _13150 = _19314;
            _16322 = vec3((_24835 * _19938).xyz);
            _17340 = _17328.x;
            _17342 = _17328.w;
            _17343 = _17328.y;
            _17344 = _17328.z * (1.0 - _17328.y);
            _17345 = _14854;
            _17346 = mix(_23299.xz, clamp((((_23299.xz - vec2(0.5)) + vec2(g_vPatternRoughnessContrastBrightness.y)) * g_vPatternRoughnessContrastBrightness.x) + vec2(0.5), vec2(0.0), vec2(1.0)), vec2(_14946 * _21712));
            _17347 = _13147;
            _17354 = _16313;
            _17355 = mix(_17327.xyz, _16615, vec3(_21719));
            _17356 = vec3((_24836 * mat4((((g_mSubstrateBurnishingColorAdjust1[0] * _9306) + (g_mSubstrateBurnishingColorAdjust2[0] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[0] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[0] * _23429), (((g_mSubstrateBurnishingColorAdjust1[1] * _9306) + (g_mSubstrateBurnishingColorAdjust2[1] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[1] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[1] * _23429), (((g_mSubstrateBurnishingColorAdjust1[2] * _9306) + (g_mSubstrateBurnishingColorAdjust2[2] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[2] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[2] * _23429), (((g_mSubstrateBurnishingColorAdjust1[3] * _9306) + (g_mSubstrateBurnishingColorAdjust2[3] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[3] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[3] * _23429))).xyz);
            _17357 = _17326.x;
            _17358 = _17326.w;
            _17359 = _17326.z * (1.0 - _17326.y);
            _17360 = _17326.y;
            _17361 = _17305;
            _17362 = _17306;
            _17363 = _11468;
            _17364 = vec4((vec4(vec4(_11468.xyz, 1.0).xyz, 1.0) * _19938).xyz, 1.0).xyz;
            _17365 = _17307;
            _17366 = _17308;
            _17367 = _23651;
            _17368 = _17309;
            _17369 = _17310;
            _17370 = _17311;
            _17371 = _17312;
            _17372 = _17324;
            _17373 = _17313;
            _17374 = _17314;
            _17375 = _17315;
            _17378 = _17316;
            _17379 = _17317;
            _17380 = _17318;
            _17381 = _17319;
            _13998 = _17320;
            _23300 = _17321;
            break;
        }
        else
        {
            float _23270 = dFdx(vIn2.x);
            float _6319 = dFdx(vIn2.y);
            float _12358 = dFdy(vIn2.x);
            float _12282 = dFdy(vIn2.y);
            float _18072 = dFdx(vIn2.z);
            float _24605 = dFdx(vIn2.w);
            float _12359 = dFdy(vIn2.z);
            float _12283 = dFdy(vIn2.w);
            float _18073 = dFdx(vIn3.x);
            float _24606 = dFdx(vIn3.y);
            float _12360 = dFdy(vIn3.x);
            float _12284 = dFdy(vIn3.y);
            float _18074 = dFdx(vIn3.z);
            float _24607 = dFdx(vIn3.w);
            float _9869 = dFdy(vIn3.z);
            float _13119 = dFdy(vIn3.w);
            vec2 _13372 = vIn4.xy * g_fDamageUvScale1;
            vec2 _13373 = vIn4.xy * g_fDamageUvScale2;
            vec2 _13374 = vIn4.xy * g_fDamageUvScale3;
            vec2 _13435 = vIn4.xy * g_fDamageUvScale4;
            float _11998 = _13372.x;
            float _23920 = dFdx(_11998);
            float _18323 = _13372.y;
            float _11092 = dFdx(_18323);
            float _12109 = dFdy(_11998);
            float _15528 = dFdy(_18323);
            float _10980 = _13373.x;
            float _12071 = dFdx(_10980);
            float _18324 = _13373.y;
            float _11093 = dFdx(_18324);
            float _12110 = dFdy(_10980);
            float _15529 = dFdy(_18324);
            float _10981 = _13374.x;
            float _12072 = dFdx(_10981);
            float _18325 = _13374.y;
            float _11094 = dFdx(_18325);
            float _12111 = dFdy(_10981);
            float _15530 = dFdy(_18325);
            float _10982 = _13435.x;
            float _12073 = dFdx(_10982);
            float _18326 = _13435.y;
            float _11095 = dFdx(_18326);
            float _12074 = dFdy(_10982);
            float _13120 = dFdy(_18326);
            vec2 _13375 = vIn4.zw * g_fGrimeUvScale1;
            vec2 _13376 = vIn4.zw * g_fGrimeUvScale2;
            vec2 _13377 = vIn4.zw * g_fGrimeUvScale3;
            vec2 _13436 = vIn4.zw * g_fGrimeUvScale4;
            float _11999 = _13375.x;
            float _23921 = dFdx(_11999);
            float _18327 = _13375.y;
            float _11096 = dFdx(_18327);
            float _12112 = dFdy(_11999);
            float _15531 = dFdy(_18327);
            float _10983 = _13376.x;
            float _12075 = dFdx(_10983);
            float _18328 = _13376.y;
            float _11097 = dFdx(_18328);
            float _12113 = dFdy(_10983);
            float _15532 = dFdy(_18328);
            float _10984 = _13377.x;
            float _12076 = dFdx(_10984);
            float _18329 = _13377.y;
            float _11098 = dFdx(_18329);
            float _12114 = dFdy(_10984);
            float _15533 = dFdy(_18329);
            float _10985 = _13436.x;
            float _12077 = dFdx(_10985);
            float _18330 = _13436.y;
            float _11099 = dFdx(_18330);
            float _15263 = dFdy(_10985);
            float _6641 = dFdy(_18330);
            float _13140;
            float _16305;
            vec2 _16863;
            float _17114;
            bool _17115;
            float _17116;
            float _17117;
            float _17118;
            float _17119;
            float _17120;
            float _17121;
            float _17122;
            float _17123;
            float _17124;
            float _17125;
            float _17126;
            float _17127;
            vec2 _17128;
            vec2 _17129;
            vec2 _17130;
            vec2 _17131;
            float _17132;
            vec4 _17133;
            float _17134;
            vec4 _17135;
            vec4 _17136;
            vec4 _17137;
            vec4 _17152;
            if (_9694)
            {
                vec2 _6260 = vec2(_23270, _6319);
                vec2 _19530 = vec2(_12358, _12282);
                _13140 = g_fBurnishingNormalScale1 * _9306;
                _16305 = g_fSurfaceBurnishingRoughnessBrightness1 * _9306;
                _17114 = g_fSubstrateBurnishingRoughnessBrightness1 * _9306;
                _17115 = g_bDamageBevelUseTintMask1 != 0;
                _17116 = g_fDamageBevelEmboss1 * _9306;
                _17117 = g_fDamageHeightBlendSoftness1 * _9306;
                _17118 = g_fDamageBevelBlendSoftness1 * _9306;
                _17119 = g_fBurnishingGrime1 * _9306;
                _17120 = g_fGrimeRoughnessBrightness1 * _9306;
                _17121 = g_fBurnishingCloth1 * _9306;
                _17122 = g_fBurnishingMetalness1 * _9306;
                _17123 = float(g_bDamageBevelBlendToSubstrate1 != 0) * _9306;
                _17124 = g_fDamageBevelCloth1 * _9306;
                _17125 = g_fDamageBevelMetalness1 * _9306;
                _17126 = g_fDamageBevelAnisotropy1 * _9306;
                _17127 = g_fDamageBevelRoughnessBrightness1 * _9306;
                _17128 = g_vSubstrateGrimeMinMax1 * _9306;
                _17129 = g_vSurfaceGrimeMinMax1 * _9306;
                _17130 = g_vSubstrateBurnishingMinMax1 * _9306;
                _17131 = g_vSurfaceBurnishingMinMax1 * _9306;
                _17132 = g_fSubstrateCompositeColorTranslucency1 * _9306;
                _17133 = vec4(textureGrad(g_tGrime_s3, vec3(_13375.xy, 0.0), vec2(_23921, _11096), vec2(_12112, _15531)).xyz * _9306, g_fGrimeTranslucency1 * _9306);
                _17134 = textureGrad(g_tDamage_s3, vec3(_13372.xy, 0.0), vec2(_23920, _11092), vec2(_12109, _15528)).x * _9306;
                _17135 = textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17136 = textureGrad(g_tSubstrate_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17137 = textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _17152 = textureGrad(g_tSurface_s3, vec3(vIn2.xy, 0.0), _6260, _19530).xyzw * _9306;
                _16863 = g_vDamageMinMax1 * _9306;
            }
            else
            {
                _13140 = 0.0;
                _16305 = 0.0;
                _17114 = 0.0;
                _17115 = false;
                _17116 = 0.0;
                _17117 = 0.0;
                _17118 = 0.0;
                _17119 = 0.0;
                _17120 = 0.0;
                _17121 = 0.0;
                _17122 = 0.0;
                _17123 = 0.0;
                _17124 = 0.0;
                _17125 = 0.0;
                _17126 = 0.0;
                _17127 = 0.0;
                _17128 = vec2(0.0);
                _17129 = vec2(0.0);
                _17130 = vec2(0.0);
                _17131 = vec2(0.0);
                _17132 = 0.0;
                _17133 = vec4(0.0);
                _17134 = 0.0;
                _17135 = vec4(0.0);
                _17136 = vec4(0.0);
                _17137 = vec4(0.0);
                _17152 = vec4(0.0);
                _16863 = vec2(0.0);
            }
            float _13141;
            float _16306;
            vec2 _16864;
            float _17138;
            bool _17139;
            float _17140;
            float _17141;
            float _17142;
            float _17143;
            float _17145;
            float _17146;
            float _17147;
            float _17148;
            float _17149;
            float _17150;
            float _17151;
            float _17153;
            vec2 _17154;
            vec2 _17158;
            vec2 _17159;
            vec2 _17160;
            float _17161;
            vec4 _17162;
            float _17163;
            vec4 _17164;
            vec4 _17165;
            vec4 _17166;
            vec4 _17167;
            if (_17155)
            {
                vec2 _16492 = vec2(_18072, _24605);
                vec2 _19533 = vec2(_12359, _12283);
                _13141 = g_fBurnishingNormalScale2 * _23427;
                _16306 = g_fSurfaceBurnishingRoughnessBrightness2 * _23427;
                _17138 = g_fSubstrateBurnishingRoughnessBrightness2 * _23427;
                _17139 = g_bDamageBevelUseTintMask2 != 0;
                _17140 = _17116 + (g_fDamageBevelEmboss2 * _23427);
                _17141 = _17117 + (g_fDamageHeightBlendSoftness2 * _23427);
                _17142 = _17118 + (g_fDamageBevelBlendSoftness2 * _23427);
                _17143 = _17119 + (g_fBurnishingGrime2 * _23427);
                _17145 = _17120 + (g_fGrimeRoughnessBrightness2 * _23427);
                _17146 = _17121 + (g_fBurnishingCloth2 * _23427);
                _17147 = _17122 + (g_fBurnishingMetalness2 * _23427);
                _17148 = _17123 + (float(g_bDamageBevelBlendToSubstrate2 != 0) * _23427);
                _17149 = _17124 + (g_fDamageBevelCloth2 * _23427);
                _17150 = _17125 + (g_fDamageBevelMetalness2 * _23427);
                _17151 = _17126 + (g_fDamageBevelAnisotropy2 * _23427);
                _17153 = _17127 + (g_fDamageBevelRoughnessBrightness2 * _23427);
                _17154 = _17128 + (g_vSubstrateGrimeMinMax2 * _23427);
                _17158 = _17129 + (g_vSurfaceGrimeMinMax2 * _23427);
                _17159 = _17130 + (g_vSubstrateBurnishingMinMax2 * _23427);
                _17160 = _17131 + (g_vSurfaceBurnishingMinMax2 * _23427);
                _17161 = _17132 + (g_fSubstrateCompositeColorTranslucency2 * _23427);
                _17162 = vec4(_17133.xyz + (textureGrad(g_tGrime_s3, vec3(_13376.xy, 1.0), vec2(_12075, _11097), vec2(_12113, _15532)).xyz * _23427), _17133.w + (g_fGrimeTranslucency2 * _23427));
                _17163 = _17134 + (textureGrad(g_tDamage_s3, vec3(_13373.xy, 1.0), vec2(_12071, _11093), vec2(_12110, _15529)).x * _23427);
                _17164 = _17135.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17165 = _17136.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17166 = _17137.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _17167 = _17152.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn2.zw, 1.0), _16492, _19533).xyzw * _23427);
                _16864 = _16863 + (g_vDamageMinMax2 * _23427);
            }
            else
            {
                _13141 = _13140;
                _16306 = _16305;
                _17138 = _17114;
                _17139 = _17115;
                _17140 = _17116;
                _17141 = _17117;
                _17142 = _17118;
                _17143 = _17119;
                _17145 = _17120;
                _17146 = _17121;
                _17147 = _17122;
                _17148 = _17123;
                _17149 = _17124;
                _17150 = _17125;
                _17151 = _17126;
                _17153 = _17127;
                _17154 = _17128;
                _17158 = _17129;
                _17159 = _17130;
                _17160 = _17131;
                _17161 = _17132;
                _17162 = _17133;
                _17163 = _17134;
                _17164 = _17135;
                _17165 = _17136;
                _17166 = _17137;
                _17167 = _17152;
                _16864 = _16863;
            }
            float _13142;
            float _16307;
            vec2 _16865;
            float _17168;
            bool _17169;
            float _17170;
            float _17171;
            float _17172;
            float _17173;
            float _17174;
            float _17175;
            float _17176;
            float _17177;
            float _17178;
            float _17179;
            float _17180;
            float _17181;
            vec2 _17182;
            vec2 _17183;
            vec2 _17184;
            vec2 _17185;
            float _17186;
            vec4 _17187;
            float _17188;
            vec4 _17189;
            vec4 _17190;
            vec4 _17191;
            vec4 _17192;
            if (_17156)
            {
                vec2 _16494 = vec2(_18073, _24606);
                vec2 _19537 = vec2(_12360, _12284);
                _13142 = g_fBurnishingNormalScale3 * _23428;
                _16307 = g_fSurfaceBurnishingRoughnessBrightness3 * _23428;
                _17168 = g_fSubstrateBurnishingRoughnessBrightness3 * _23428;
                _17169 = g_bDamageBevelUseTintMask3 != 0;
                _17170 = _17140 + (g_fDamageBevelEmboss3 * _23428);
                _17171 = _17141 + (g_fDamageHeightBlendSoftness3 * _23428);
                _17172 = _17142 + (g_fDamageBevelBlendSoftness3 * _23428);
                _17173 = _17143 + (g_fBurnishingGrime3 * _23428);
                _17174 = _17145 + (g_fGrimeRoughnessBrightness3 * _23428);
                _17175 = _17146 + (g_fBurnishingCloth3 * _23428);
                _17176 = _17147 + (g_fBurnishingMetalness3 * _23428);
                _17177 = _17148 + (float(g_bDamageBevelBlendToSubstrate3 != 0) * _23428);
                _17178 = _17149 + (g_fDamageBevelCloth3 * _23428);
                _17179 = _17150 + (g_fDamageBevelMetalness3 * _23428);
                _17180 = _17151 + (g_fDamageBevelAnisotropy3 * _23428);
                _17181 = _17153 + (g_fDamageBevelRoughnessBrightness3 * _23428);
                _17182 = _17154 + (g_vSubstrateGrimeMinMax3 * _23428);
                _17183 = _17158 + (g_vSurfaceGrimeMinMax3 * _23428);
                _17184 = _17159 + (g_vSubstrateBurnishingMinMax3 * _23428);
                _17185 = _17160 + (g_vSurfaceBurnishingMinMax3 * _23428);
                _17186 = _17161 + (g_fSubstrateCompositeColorTranslucency3 * _23428);
                _17187 = vec4(_17162.xyz + (textureGrad(g_tGrime_s3, vec3(_13377.xy, 2.0), vec2(_12076, _11098), vec2(_12114, _15533)).xyz * _23428), _17162.w + (g_fGrimeTranslucency3 * _23428));
                _17188 = _17163 + (textureGrad(g_tDamage_s3, vec3(_13374.xy, 2.0), vec2(_12072, _11094), vec2(_12111, _15530)).x * _23428);
                _17189 = _17164.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.xy, 2.0), _16494, _19537).xyzw * _23428);
                _17190 = _17165.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.xy, 2.0), _16494, _19537).xyzw * _23428);
                _17191 = _17166.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.xy, 2.0), _16494, _19537).xyzw * _23428);
                _17192 = _17167.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.xy, 2.0), _16494, _19537).xyzw * _23428);
                _16865 = _16864 + (g_vDamageMinMax3 * _23428);
            }
            else
            {
                _13142 = _13141;
                _16307 = _16306;
                _17168 = _17138;
                _17169 = _17139;
                _17170 = _17140;
                _17171 = _17141;
                _17172 = _17142;
                _17173 = _17143;
                _17174 = _17145;
                _17175 = _17146;
                _17176 = _17147;
                _17177 = _17148;
                _17178 = _17149;
                _17179 = _17150;
                _17180 = _17151;
                _17181 = _17153;
                _17182 = _17154;
                _17183 = _17158;
                _17184 = _17159;
                _17185 = _17160;
                _17186 = _17161;
                _17187 = _17162;
                _17188 = _17163;
                _17189 = _17164;
                _17190 = _17165;
                _17191 = _17166;
                _17192 = _17167;
                _16865 = _16864;
            }
            vec4 _6616;
            bool _13694;
            float _17210;
            float _17211;
            float _17213;
            vec4 _17214;
            vec4 _17215;
            vec4 _17216;
            if (_17157)
            {
                vec2 _16496 = vec2(_18074, _24607);
                vec2 _19541 = vec2(_9869, _13119);
                _13143 = _17185 + (g_vSurfaceBurnishingMinMax4 * _23429);
                _16308 = _17183 + (g_vSurfaceGrimeMinMax4 * _23429);
                _17193 = _17184 + (g_vSubstrateBurnishingMinMax4 * _23429);
                _17194 = _17182 + (g_vSubstrateGrimeMinMax4 * _23429);
                _17195 = _17188 + (textureGrad(g_tDamage_s3, vec3(_13435.xy, 3.0), vec2(_12073, _11095), vec2(_12074, _13120)).x * _23429);
                _17196 = vec4(_17187.xyz + (textureGrad(g_tGrime_s3, vec3(_13436.xy, 3.0), vec2(_12077, _11099), vec2(_15263, _6641)).xyz * _23429), _17187.w + (g_fGrimeTranslucency4 * _23429));
                _17197 = _16865 + (g_vDamageMinMax4 * _23429);
                _17198 = _17174 + (g_fGrimeRoughnessBrightness4 * _23429);
                _17199 = _17178 + (g_fDamageBevelCloth4 * _23429);
                _17200 = _17177 + (float(g_bDamageBevelBlendToSubstrate4 != 0) * _23429);
                _17201 = _17176 + (g_fBurnishingMetalness4 * _23429);
                _17202 = _17175 + (g_fBurnishingCloth4 * _23429);
                _17203 = _17173 + (g_fBurnishingGrime4 * _23429);
                _17204 = g_fBurnishingNormalScale4 * _23429;
                _17205 = g_fSurfaceBurnishingRoughnessBrightness4 * _23429;
                _17206 = g_fSubstrateBurnishingRoughnessBrightness4 * _23429;
                _17207 = _17171 + (g_fDamageHeightBlendSoftness4 * _23429);
                _17208 = _17172 + (g_fDamageBevelBlendSoftness4 * _23429);
                _17209 = _17170 + (g_fDamageBevelEmboss4 * _23429);
                _17210 = _17180 + (g_fDamageBevelAnisotropy4 * _23429);
                _17211 = _17181 + (g_fDamageBevelRoughnessBrightness4 * _23429);
                _17212 = _17179 + (g_fDamageBevelMetalness4 * _23429);
                _17213 = _17186 + (g_fSubstrateCompositeColorTranslucency4 * _23429);
                _17214 = _17189.xyzw + (textureGrad(g_tSubstrateProperties_s3, vec3(vIn3.zw, 3.0), _16496, _19541).xyzw * _23429);
                _17215 = _17190.xyzw + (textureGrad(g_tSubstrate_s3, vec3(vIn3.zw, 3.0), _16496, _19541).xyzw * _23429);
                _17216 = _17191.xyzw + (textureGrad(g_tSurfaceProperties_s3, vec3(vIn3.zw, 3.0), _16496, _19541).xyzw * _23429);
                _13694 = g_bDamageBevelUseTintMask4 != 0;
                _6616 = _17192.xyzw + (textureGrad(g_tSurface_s3, vec3(vIn3.zw, 3.0), _16496, _19541).xyzw * _23429);
            }
            else
            {
                _13143 = _17185;
                _16308 = _17183;
                _17193 = _17184;
                _17194 = _17182;
                _17195 = _17188;
                _17196 = _17187;
                _17197 = _16865;
                _17198 = _17174;
                _17199 = _17178;
                _17200 = _17177;
                _17201 = _17176;
                _17202 = _17175;
                _17203 = _17173;
                _17204 = _13142;
                _17205 = _16307;
                _17206 = _17168;
                _17207 = _17171;
                _17208 = _17172;
                _17209 = _17170;
                _17210 = _17180;
                _17211 = _17181;
                _17212 = _17179;
                _17213 = _17186;
                _17214 = _17189;
                _17215 = _17190;
                _17216 = _17191;
                _13694 = _17169;
                _6616 = _17192;
            }
            _14876 = g_fPatternPaintRespectsTintMask != 0;
            if (_14876)
            {
                _21710 = _6616.w;
            }
            else
            {
                _21710 = max(_6616.w, 0.0);
            }
            bool _6220;
            float _16309;
            float _18473;
            mat4 _19935 = mat4((((g_mSurfaceBurnishingColorAdjust1[0] * _9306) + (g_mSurfaceBurnishingColorAdjust2[0] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[0] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[0] * _23429), (((g_mSurfaceBurnishingColorAdjust1[1] * _9306) + (g_mSurfaceBurnishingColorAdjust2[1] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[1] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[1] * _23429), (((g_mSurfaceBurnishingColorAdjust1[2] * _9306) + (g_mSurfaceBurnishingColorAdjust2[2] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[2] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[2] * _23429), (((g_mSurfaceBurnishingColorAdjust1[3] * _9306) + (g_mSurfaceBurnishingColorAdjust2[3] * _23427)) + (g_mSurfaceBurnishingColorAdjust3[3] * _23428)) + (g_mSurfaceBurnishingColorAdjust4[3] * _23429));
            _13560 = _17216.x;
            _16973 = _17216.y;
            _8530 = _17216.z * (1.0 - _16973);
            _22892 = _17216.w;
            vec4 _24833 = vec4(_6616.xyz, 1.0);
            vec4 _11580 = vec4((_24833 * mat4((((g_mSurfaceColorAdjust1[0] * _9306) + (g_mSurfaceColorAdjust2[0] * _23427)) + (g_mSurfaceColorAdjust3[0] * _23428)) + (g_mSurfaceColorAdjust4[0] * _23429), (((g_mSurfaceColorAdjust1[1] * _9306) + (g_mSurfaceColorAdjust2[1] * _23427)) + (g_mSurfaceColorAdjust3[1] * _23428)) + (g_mSurfaceColorAdjust4[1] * _23429), (((g_mSurfaceColorAdjust1[2] * _9306) + (g_mSurfaceColorAdjust2[2] * _23427)) + (g_mSurfaceColorAdjust3[2] * _23428)) + (g_mSurfaceColorAdjust4[2] * _23429), (((g_mSurfaceColorAdjust1[3] * _9306) + (g_mSurfaceColorAdjust2[3] * _23427)) + (g_mSurfaceColorAdjust3[3] * _23428)) + (g_mSurfaceColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18226 = _11580.xyz;
            vec3 _16611;
            do
            {
                float _20940;
                do
                {
                    _18473 = max(_21709.x, max(_21709.y, _21709.z));
                    _16309 = _18473 - min(_21709.x, min(_21709.y, _21709.z));
                    _6220 = _18473 == 0.0;
                    if (_6220)
                    {
                        _20940 = 0.0;
                        break;
                    }
                    _20940 = _16309 / _18473;
                    break;
                } while(false);
                float _12835 = dot(_21709.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23052 = max(dot(_11580.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_12835 > 0.0)
                {
                    vec3 _22572 = normalize(_21709.xyz).xyz - vec3(0.57700002193450927734375);
                    vec3 _7057 = clamp((normalize(_22572) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15712 = _7057 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16611 = mix((_18226 * mix(1.0, min(max(1.0 + (4.0 * (_12835 - 0.5)), mix(0.02999999932944774627685546875, 0.134000003337860107421875, _16973) / _23052), mix(0.89999997615814208984375, 0.980000019073486328125, _16973) / _23052), _21709.w)).xyz, _7057 * (_12835 / ((_15712.x + _15712.y) + _15712.z)), vec3(clamp(_20940 * pow(abs(dot(_22572, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _21709.w));
                    break;
                }
                else
                {
                    _16611 = _18226;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            _19312 = mix(_6616.xyz, _16611, vec3(_21710));
            _23992 = vec3((_24833 * _19935).xyz);
            float _21711;
            if (_14876)
            {
                _21711 = _17215.w;
            }
            else
            {
                _21711 = max(_17215.w, 0.0);
            }
            vec3 _7901;
            float _9231;
            float _12836;
            bool _15230;
            _16297 = _17214.x;
            _6536 = _17214.y;
            _8568 = _17214.z * (1.0 - _6536);
            _23574 = _17214.w;
            float _16069 = _21709.w * _17213;
            vec4 _24834 = vec4(_17215.xyz, 1.0);
            vec4 _11581 = vec4((_24834 * mat4((((g_mSubstrateColorAdjust1[0] * _9306) + (g_mSubstrateColorAdjust2[0] * _23427)) + (g_mSubstrateColorAdjust3[0] * _23428)) + (g_mSubstrateColorAdjust4[0] * _23429), (((g_mSubstrateColorAdjust1[1] * _9306) + (g_mSubstrateColorAdjust2[1] * _23427)) + (g_mSubstrateColorAdjust3[1] * _23428)) + (g_mSubstrateColorAdjust4[1] * _23429), (((g_mSubstrateColorAdjust1[2] * _9306) + (g_mSubstrateColorAdjust2[2] * _23427)) + (g_mSubstrateColorAdjust3[2] * _23428)) + (g_mSubstrateColorAdjust4[2] * _23429), (((g_mSubstrateColorAdjust1[3] * _9306) + (g_mSubstrateColorAdjust2[3] * _23427)) + (g_mSubstrateColorAdjust3[3] * _23428)) + (g_mSubstrateColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18227 = _11581.xyz;
            vec3 _16612;
            do
            {
                _7901 = _21709.xyz;
                float _20941;
                do
                {
                    if (_6220)
                    {
                        _20941 = 0.0;
                        break;
                    }
                    _20941 = _16309 / _18473;
                    break;
                } while(false);
                _12836 = dot(_21709.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
                float _23053 = max(dot(_11581.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                _9231 = 4.0 * (_12836 - 0.5);
                _15230 = _12836 > 0.0;
                if (_15230)
                {
                    vec3 _22573 = normalize(_7901).xyz - vec3(0.57700002193450927734375);
                    vec3 _7060 = clamp((normalize(_22573) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15713 = _7060 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16612 = mix((_18227 * mix(1.0, min(max(1.0 + _9231, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _6536) / _23053), mix(0.89999997615814208984375, 0.980000019073486328125, _6536) / _23053), _16069)).xyz, _7060 * (_12836 / ((_15713.x + _15713.y) + _15713.z)), vec3(clamp(_20941 * pow(abs(dot(_22573, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _16069));
                    break;
                }
                else
                {
                    _16612 = _18227;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            _19313 = mix(_17215.xyz, _16612, vec3(_21711));
            _12902 = vec3((_24834 * mat4((((g_mSubstrateBurnishingColorAdjust1[0] * _9306) + (g_mSubstrateBurnishingColorAdjust2[0] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[0] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[0] * _23429), (((g_mSubstrateBurnishingColorAdjust1[1] * _9306) + (g_mSubstrateBurnishingColorAdjust2[1] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[1] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[1] * _23429), (((g_mSubstrateBurnishingColorAdjust1[2] * _9306) + (g_mSubstrateBurnishingColorAdjust2[2] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[2] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[2] * _23429), (((g_mSubstrateBurnishingColorAdjust1[3] * _9306) + (g_mSubstrateBurnishingColorAdjust2[3] * _23427)) + (g_mSubstrateBurnishingColorAdjust3[3] * _23428)) + (g_mSubstrateBurnishingColorAdjust4[3] * _23429))).xyz);
            vec4 _11582 = vec4((_24833 * mat4((((g_mDamageColorAdjust1[0] * _9306) + (g_mDamageColorAdjust2[0] * _23427)) + (g_mDamageColorAdjust3[0] * _23428)) + (g_mDamageColorAdjust4[0] * _23429), (((g_mDamageColorAdjust1[1] * _9306) + (g_mDamageColorAdjust2[1] * _23427)) + (g_mDamageColorAdjust3[1] * _23428)) + (g_mDamageColorAdjust4[1] * _23429), (((g_mDamageColorAdjust1[2] * _9306) + (g_mDamageColorAdjust2[2] * _23427)) + (g_mDamageColorAdjust3[2] * _23428)) + (g_mDamageColorAdjust4[2] * _23429), (((g_mDamageColorAdjust1[3] * _9306) + (g_mDamageColorAdjust2[3] * _23427)) + (g_mDamageColorAdjust3[3] * _23428)) + (g_mDamageColorAdjust4[3] * _23429))).xyz, _2);
            vec3 _18228 = _11582.xyz;
            vec3 _16613;
            do
            {
                float _20942;
                do
                {
                    if (_6220)
                    {
                        _20942 = 0.0;
                        break;
                    }
                    _20942 = _16309 / _18473;
                    break;
                } while(false);
                float _17217 = max(dot(_11582.xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375)), 0.001000000047497451305389404296875);
                if (_15230)
                {
                    vec3 _22574 = normalize(_7901).xyz - vec3(0.57700002193450927734375);
                    vec3 _7061 = clamp((normalize(_22574) * 2.0) + vec3(1.0), vec3(0.0), vec3(1.0)).xyz;
                    vec3 _15714 = _7061 * vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125);
                    _16613 = mix((_18228 * mix(1.0, min(max(1.0 + _9231, mix(0.02999999932944774627685546875, 0.134000003337860107421875, _17212) / _17217), mix(0.89999997615814208984375, 0.980000019073486328125, _17212) / _17217), _16069)).xyz, _7061 * (_12836 / ((_15714.x + _15714.y) + _15714.z)), vec3(clamp(_20942 * pow(abs(dot(_22574, vec3(0.57700002193450927734375))), 0.20000000298023223876953125), 0.0, 1.0) * _16069));
                    break;
                }
                else
                {
                    _16613 = _18228;
                    break;
                }
                break; // unreachable workaround
            } while(false);
            _11467 = mix(_19312.xyz, _16613, vec3(_13694 ? _21710 : 1.0));
            _7079 = vec4((vec4(vec4(_11467.xyz, 1.0).xyz, 1.0) * _19935).xyz, 1.0).xyz;
            vec2 _23650 = _23299.xz * _17211;
            _9596 = _23650;
            _9596.y = mix(_23650.x, _23650.y, _17210);
        }
        bool _12916;
        if (_14875)
        {
            _12916 = g_bPatternPaintLayer != 0;
        }
        else
        {
            _12916 = false;
        }
        vec3 _13149;
        float _16317;
        float _16480;
        float _17333;
        float _17334;
        vec3 _17335;
        vec2 _17336;
        vec3 _17337;
        float _17338;
        float _17339;
        if (_12916)
        {
            float _8186 = (_13155 * _24878.w) * (_14876 ? _21710 : 1.0);
            vec3 _12121 = vec3(_8186);
            vec3 _10574 = mix(_19312, _24878.xyz, _12121);
            float _13148;
            vec3 _16316;
            float _16479;
            vec3 _17330;
            float _17331;
            float _17332;
            if (_14874)
            {
                float _9808 = clamp(_9716 - g_fPatternTranslucencyThreshold, 0.0, 1.0) * _8186;
                vec3 _22239 = _7244 + (vec3(0.0, 0.0, 1.0) * _9716);
                vec3 _23794 = normalize((vIn5.xyz * 1.0).xyz).xyz;
                vec3 _9001 = normalize(mix(_23794, _23794 + normalize(cross(dFdy(_22239), dFdx(_22239))).xyz, vec3((g_fPatternEmboss * _8186) * _5625))).xyz;
                vec2 _15752 = mix(_14854, normalize(vec3(vec2(_16785, _11178), (1.0 - abs(_16785)) - abs(_11178))), _12121).xy + vec3(dot(_9001, vIn6.xyz), dot(_9001, _20527.xyz), _3).xy;
                vec3 _20488;
                _20488.x = _15752.x;
                _20488.y = _15752.y;
                _13148 = _22892 + ((g_fPatternEmboss < 0.0) ? 0.0 : _9808);
                _16316 = _20488;
                _17330 = mix(_10574, _24878.xyz, _12121);
                _17331 = mix(_17207, 0.0, _9808);
                _17332 = mix(_17208, 0.00999999977648258209228515625, _9808);
                _16479 = mix(_17209, max(0.0, g_fPatternEmboss), _9808);
            }
            else
            {
                _13148 = _22892;
                _16316 = _14854;
                _17330 = _11467;
                _17331 = _17207;
                _17332 = _17208;
                _16479 = _17209;
            }
            _13149 = _10574;
            _16317 = _13148;
            _17333 = mix(_16973, _20706.x, _8186);
            _17334 = mix(_8530, g_fPatternCloth, _8186);
            _17335 = _16316;
            _17336 = mix(_23299.xz, vec2(_20706.y), vec2(_8186));
            _17337 = _17330;
            _17338 = _17331;
            _17339 = _17332;
            _16480 = _16479;
        }
        else
        {
            _13149 = _19312;
            _16317 = _22892;
            _17333 = _16973;
            _17334 = _8530;
            _17335 = _14854;
            _17336 = _23299.xz;
            _17337 = _11467;
            _17338 = _17207;
            _17339 = _17208;
            _16480 = _17209;
        }
        _13150 = _13149;
        _16322 = _23992;
        _17340 = _13560;
        _17342 = _16317;
        _17343 = _17333;
        _17344 = _17334;
        _17345 = _17335;
        _17346 = _17336;
        _17347 = _13143;
        _17354 = _16308;
        _17355 = _19313;
        _17356 = _12902;
        _17357 = _16297;
        _17358 = _23574;
        _17359 = _8568;
        _17360 = _6536;
        _17361 = _17193;
        _17362 = _17194;
        _17363 = _17337;
        _17364 = _7079;
        _17365 = _17195;
        _17366 = _17338;
        _17367 = _9596;
        _17368 = _17196;
        _17369 = _17197;
        _17370 = _17198;
        _17371 = _17339;
        _17372 = _17212;
        _17373 = _17199;
        _17374 = _17200;
        _17375 = _17201;
        _17378 = _16480;
        _17379 = _17202;
        _17380 = _17203;
        _17381 = _17204;
        _13998 = _17205;
        _23300 = _17206;
        break;
    } while(false);
    vec4 _19374 = texture(g_tObjectProperties_s1, vIn0.xy);
    float _14499 = _17342 - _17358;
    float _23339 = ((((2.0 - ((g_fWearProgress * (_17369.y - _17369.x)) + _17369.x)) - _17365) - _19374.y) - _17342) + _14499;
    float _17421 = smoothstep(-_17366, _17366, (_23339 * _14499) / _17366);
    float _6542 = max(min(_17342, clamp(_23339, 0.0, 1.0)), _17358);
    float _15773 = _23339 / _17371;
    float _10874 = smoothstep(1.0 + _17371, 1.0 - _17371, _15773);
    float _22419 = clamp(_15773, 0.0, 1.0);
    float _8519 = clamp((g_fWearProgress - 1.0) + _19374.z, 0.0, 1.0) * (_6542 + g_fWearProgress);
    float _10058 = smoothstep(_17361.x, _17361.y, _8519);
    float _7769 = clamp(_8519, 0.0, 1.0);
    float _20239 = _19374.x * mix(mix(_17357, _17340, _17421) * clamp(1.0 - ((((clamp((_6542 + 0.00999999977648258209228515625) / _17366, 0.0, 1.0) * (1.0 - clamp((_6542 - 0.00999999977648258209228515625) / _17366, 0.0, 1.0))) * _17421) * _17342) * 0.75), 0.0, 1.0), 1.0, _10058);
    vec3 _9818 = mix(_17355, _17356, vec3(_10058));
    vec3 _12925 = vec3(smoothstep(_17347.x, _17347.y, _8519));
    vec4 _19375 = texture(g_tNormal_s1, vIn0.xy);
    float _16000 = _19375.x;
    float _19720 = _19375.y;
    float _16786 = (_16000 + _19720) - 1.00392162799835205078125;
    float _11179 = _16000 - _19720;
    vec3 _19308 = normalize(vec3(vec2(_16786, _11179), (1.0 - abs(_16786)) - abs(_11179)));
    float _20108 = mix(1.0, _17381, _7769);
    vec2 _22350 = vec2(_17421);
    vec2 _23011 = _19308.xy + (mix(_23430, _17345.xy, _22350) * _20108);
    vec3 _24090 = _20527.xyz;
    vec3 _8665 = _7244 + (vec3(0.0, 0.0, 1.0) * _15773);
    vec3 _10113 = dFdx(_8665);
    vec3 _19987 = dFdy(_8665);
    vec3 _23795 = normalize((((vIn6.xyz * _23011.x).xyz + (_24090 * _23011.y)).xyz + (vIn5.xyz * _19308.z)).xyz).xyz;
    vec3 _6524 = normalize(mix(_23795, _23795 + normalize(cross(_19987, _10113)).xyz, vec3(((((smoothstep(-_17371, _17371, _15773) * _10874) * _20108) * _17378) * _5625) * _14499)));
    vec3 _10312 = _6524.xyz;
    float _18095 = dot(_10312, vIn6.xyz);
    float _6548 = dot(_10312, _24090);
    float _16292 = _6524.z;
    vec2 _18006 = mix(_13192.xz, mix(_17346.xy, _17367.xy, vec2(_10874)), _22350).xy * mix(1.0, mix(_23300, _13998, _22419), _7769);
    float _11266 = (_6542 * _20239) * (g_fWearProgress * 2.0);
    float _19211 = mix(smoothstep(_17362.x, _17362.y, _11266), smoothstep(_17354.x, _17354.y, _11266), mix(_17421, 1.0 - _10874, _17374)) * (1.0 - min(_18006.x, _18006.y));
    float _13440 = mix(_19211, max(_19211, _17380), _7769) * _17368.w;
    vec2 _14940 = mix(_18006.xy, _18006.xx * _17370, vec2(_13440));
    float _20536 = _14940.x;
    float _7253 = _14940.y;
    float _9119 = mix(mix(_17360, mix(_17343, _17372, _10874), _17421), _17375, _7769) * (1.0 - _13440);
    float _8280 = mix(mix(_17359, mix(_17344, _17373, _10874), _17421), _17379, _7769) * (1.0 - _9119);
    vec4 _6805;
    if (g_nOutputMode == 0)
    {
        _6805 = vec4(mix(mix(_9818, mix(mix(_13150, _16322, _12925), mix(mix(_17363, _17364, _12925), _9818, vec3(_17374 * (1.0 - _22419))), vec3(_10874)), vec3(_17421)).xyz, _17368.xyz, vec3(_13440)).xyz, 1.0);
    }
    else
    {
        vec4 _12506;
        if (g_nOutputMode == 1)
        {
            vec3 _16929 = vec3(_18095, _6548, _16292).xyz / vec3((abs(_18095) + abs(_6548)) + abs(_16292));
            float _10674 = _16929.x;
            float _23725 = _16929.y;
            vec2 _21979 = (vec2(_10674 + _23725, _10674 - _23725) * 0.5) + vec2(0.5);
            vec3 _16636 = vec3(_21979.xy, _20536).xyz;
            vec3 _10600 = _16636 * vec3(0.077399380505084991455078125);
            vec3 _7710 = pow((_16636 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
            float _21354;
            if (_21979.x <= 0.040449999272823333740234375)
            {
                _21354 = _10600.x;
            }
            else
            {
                _21354 = _7710.x;
            }
            float _23037;
            if (_21979.y <= 0.040449999272823333740234375)
            {
                _23037 = _10600.y;
            }
            else
            {
                _23037 = _7710.y;
            }
            float _19477;
            if (_20536 <= 0.040449999272823333740234375)
            {
                _19477 = _10600.z;
            }
            else
            {
                _19477 = _7710.z;
            }
            _12506 = vec4(vec3(_21354, _23037, _19477), _7253);
        }
        else
        {
            vec4 _12505;
            if (g_nOutputMode == 2)
            {
                vec3 _20866 = vec3(0.0, _9119, _8280).xyz;
                vec3 _10599 = _20866 * vec3(0.077399380505084991455078125);
                vec3 _7709 = pow((_20866 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                float _23036;
                if (_9119 <= 0.040449999272823333740234375)
                {
                    _23036 = _10599.y;
                }
                else
                {
                    _23036 = _7709.y;
                }
                float _19476;
                if (_8280 <= 0.040449999272823333740234375)
                {
                    _19476 = _10599.z;
                }
                else
                {
                    _19476 = _7709.z;
                }
                _12505 = vec4(vec3(_10599.x, _23036, _19476), 1.0);
            }
            else
            {
                vec4 _12503;
                if (g_nOutputMode == 3)
                {
                    vec3 _20865 = vec3(_20239).xyz;
                    vec3 _10598 = _20865 * vec3(0.077399380505084991455078125);
                    vec3 _9358 = pow((_20865 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                    bool _17061 = _20239 <= 0.040449999272823333740234375;
                    float _12917;
                    if (_17061)
                    {
                        _12917 = _10598.x;
                    }
                    else
                    {
                        _12917 = _9358.x;
                    }
                    float _12918;
                    if (_17061)
                    {
                        _12918 = _10598.y;
                    }
                    else
                    {
                        _12918 = _9358.y;
                    }
                    float _19475;
                    if (_17061)
                    {
                        _19475 = _10598.z;
                    }
                    else
                    {
                        _19475 = _9358.z;
                    }
                    _12503 = vec4(vec3(_12917, _12918, _19475), 1.0);
                }
                else
                {
                    vec4 _12502;
                    if (g_nOutputMode == 4)
                    {
                        vec3 _16635 = vec3(_14940.xy, 0.0).xyz;
                        vec3 _10597 = _16635 * vec3(0.077399380505084991455078125);
                        vec3 _9357 = pow((_16635 * vec3(0.947867333889007568359375)) + vec3(0.052132703363895416259765625), vec3(2.400000095367431640625));
                        float _23035;
                        if (_20536 <= 0.040449999272823333740234375)
                        {
                            _23035 = _10597.x;
                        }
                        else
                        {
                            _23035 = _9357.x;
                        }
                        float _19302;
                        if (_7253 <= 0.040449999272823333740234375)
                        {
                            _19302 = _10597.y;
                        }
                        else
                        {
                            _19302 = _9357.y;
                        }
                        _12502 = vec4(vec3(_23035, _19302, _10597.z), 1.0);
                    }
                    else
                    {
                        _12502 = vec4(0.5, 0.5, 0.5, 1.0);
                    }
                    _12503 = _12502;
                }
                _12505 = _12503;
            }
            _12506 = _12505;
        }
        _6805 = _12506;
    }
    outColor = _6805;
}

`,uniforms:[{name:`g_bPattern`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_nOutputMode`,glsl:`int`,type:5,fdef:[],idef:[0,0,0,0]},{name:`g_mSurfaceColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale1`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness1`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask1`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate1`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth1`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust1`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale1`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness1`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax1`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime1`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale2`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness2`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask2`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate2`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth2`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust2`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale2`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness2`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax2`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime2`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale3`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness3`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask3`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate3`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth3`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust3`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale3`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness3`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax3`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime3`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_mSurfaceColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fSubstrateCompositeColorTranslucency4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageUvScale4`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fDamageHeightBlendSoftness4`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_vDamageMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_bDamageBevelUseTintMask4`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_mDamageColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelBlendSoftness4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fDamageBevelEmboss4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fDamageBevelAnisotropy4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fDamageBevelCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bDamageBevelBlendToSubstrate4`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fBurnishingMetalness4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingCloth4`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_mSurfaceBurnishingColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_mSubstrateBurnishingColorAdjust4`,glsl:`mat4`,type:19,fdef:[0,0,0,0],idef:[]},{name:`g_fBurnishingNormalScale4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSurfaceBurnishingRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstrateBurnishingRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceBurnishingMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateBurnishingMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fGrimeUvScale4`,glsl:`float`,type:1,fdef:[4,0,0,0],idef:[]},{name:`g_fGrimeTranslucency4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fGrimeRoughnessBrightness4`,glsl:`float`,type:1,fdef:[1,0,0,0],idef:[]},{name:`g_vSurfaceGrimeMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_vSubstrateGrimeMinMax4`,glsl:`vec2`,type:2,fdef:[0,1,0,0],idef:[]},{name:`g_fBurnishingGrime4`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_vId1Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId2Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId3Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId4Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId5Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId6Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId7Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_vId8Color`,glsl:`vec4`,type:4,fdef:[1,1,1,1],idef:[]},{name:`g_bPatternPaintLayer`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_bPatternPaintEmboss`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fPatternTranslucencyThreshold`,glsl:`float`,type:1,fdef:[.01,0,0,0],idef:[]},{name:`g_fPatternPaintRespectsTintMask`,glsl:`int`,type:9,fdef:[],idef:[0,0,0,0]},{name:`g_fPatternCloth`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_fPatternEmboss`,glsl:`float`,type:1,fdef:[.5,0,0,0],idef:[]},{name:`g_fPuffyPaintNormalSoftness`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_vPatternRoughnessContrastBrightness`,glsl:`vec2`,type:2,fdef:[1,0,0,0],idef:[]},{name:`g_fSubstratePatternMipBias`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]},{name:`g_bId1Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId2Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId3Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId4Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId5Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId6Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId7Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_bId8Pattern`,glsl:`int`,type:9,fdef:[],idef:[1,0,0,0]},{name:`g_fWearProgress`,glsl:`float`,type:1,fdef:[0,0,0,0],idef:[]}],samplers:[{uniform:`g_tLayerId_s3`,param:`g_tLayerId`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tNormal_s1`,param:`g_tNormal`,srgb:0,slot:1,filter:85,address:0},{uniform:`g_tObjectProperties_s1`,param:`g_tObjectProperties`,srgb:0,slot:1,filter:85,address:0},{uniform:`g_tPatternProperties_s3`,param:`g_tPatternProperties`,srgb:0,slot:3,filter:21,address:0},{uniform:`g_tPattern_s3`,param:`g_tPattern`,srgb:1,slot:3,filter:21,address:0},{uniform:`g_tTintId_s0`,param:`g_tTintId`,srgb:0,slot:0,filter:0,address:0},{uniform:`g_tDamage_s3`,layers:[`g_tDamage1`,`g_tDamage2`,`g_tDamage3`,`g_tDamage4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tGrime_s3`,layers:[`g_tGrime1`,`g_tGrime2`,`g_tGrime3`,`g_tGrime4`],srgb:1,slot:3,filter:21,address:0},{uniform:`g_tSubstrateNormal_s3`,layers:[`g_tSubstrateNormal1`,`g_tSubstrateNormal2`,`g_tSubstrateNormal3`,`g_tSubstrateNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSubstrateProperties_s3`,layers:[`g_tSubstrateProperties1`,`g_tSubstrateProperties2`,`g_tSubstrateProperties3`,`g_tSubstrateProperties4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSubstrate_s3`,layers:[`g_tSubstrate1`,`g_tSubstrate2`,`g_tSubstrate3`,`g_tSubstrate4`],srgb:1,slot:3,filter:21,address:0},{uniform:`g_tSurfaceNormal_s3`,layers:[`g_tSurfaceNormal1`,`g_tSurfaceNormal2`,`g_tSurfaceNormal3`,`g_tSurfaceNormal4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSurfaceProperties_s3`,layers:[`g_tSurfaceProperties1`,`g_tSurfaceProperties2`,`g_tSurfaceProperties3`,`g_tSurfaceProperties4`],srgb:0,slot:3,filter:21,address:0},{uniform:`g_tSurface_s3`,layers:[`g_tSurface1`,`g_tSurface2`,`g_tSurface3`,`g_tSurface4`],srgb:1,slot:3,filter:21,address:0}],inputs:[[0,`vec4`],[1,`vec4`],[2,`vec4`],[3,`vec4`],[4,`vec4`],[5,`vec3`],[6,`vec4`]]}},t={g_bPattern:`1A030407000F00070000803F021400070000000000`,g_bPatternPaintEmboss:`1A0500`,g_bPatternPaintLayer:`1A0400`,g_fDamageBevelBlendSoftness1:`1D3DA2EBB31D010EA88813076F12833A061D0000`,g_fDamageBevelBlendSoftness2:`1D8AF6AFA31D5553550F13076F12833A061D0000`,g_fDamageBevelBlendSoftness3:`1D3EAAD3A51DC36A9C0C13076F12833A061D0000`,g_fDamageBevelBlendSoftness4:`1D164A70DC1D8F4CFD1B13076F12833A061D0000`,g_fDamageHeightBlendSoftness1:`1D010EA888076F12833A061D0000`,g_fDamageHeightBlendSoftness2:`1D5553550F076F12833A061D0000`,g_fDamageHeightBlendSoftness3:`1DC36A9C0C076F12833A061D0000`,g_fDamageHeightBlendSoftness4:`1D8F4CFD1B076F12833A061D0000`,g_fDetailBlackPointCompensation1:`070000803F1DA2EA526E1400`,g_fDetailBlackPointCompensation2:`070000803F1D5FF759221400`,g_fDetailBlackPointCompensation3:`070000803F1DEFAC08EF1400`,g_fDetailBlackPointCompensation4:`070000803F1D58E9CC651400`,g_fFlipFixup:`1DAF03DDC7040A001300070000803F18021800070000803F00`,g_fPaintShadowPower:`070AD7233C1DD68D3694079A99193E15061D0000`,g_fWearProgress:`1D389770931D6B12202A06150000`,g_mDamageColorAdjust1:`1D7D5A13D9070000803F0636001DAB2D7B981D078A57CF1D4E13F6830619001D8B36679E062800063000062E0000`,g_mDamageColorAdjust2:`1DA3A8A830070000803F0636001DA9C804D21DE97526071D0D9521670619001D6243C645062800063000062E0000`,g_mDamageColorAdjust3:`1D8F8D6247070000803F0636001D1BA721D91D36DCF0E01DECDEA4EF0619001D9E7D747A062800063000062E0000`,g_mDamageColorAdjust4:`1D8288C7D5070000803F0636001DDE6148FA1D3EF2EB291D68BE55710619001DDBF3424F062800063000062E0000`,g_mSubstrateBurnishingColorAdjust1:`1DFBC0EAAA070000803F0636001D3FAA8B301DF4DD57B21D57F7A35A0619001D8BF5BD5B062800063000062E0000`,g_mSubstrateBurnishingColorAdjust2:`1D7E79C484070000803F0636001D960B7B0D1D0E1389121DD495BF6A0619001D23C2097F062800063000062E0000`,g_mSubstrateBurnishingColorAdjust3:`1D71BF862D070000803F0636001D943B862A1DA7C4D1B21D4B49B1550619001D8F5996D4062800063000062E0000`,g_mSubstrateBurnishingColorAdjust4:`1D7AC07F55070000803F0636001D2772FB631DDFD591AD1DFAB56D7F0619001D9E31CF89062800063000062E0000`,g_mSubstrateColorAdjust1:`1D26FA6EBB070000803F0636001D2842169D1DC4E7F3F01D67BD64CD0619001D8BF5BD5B062800063000062E0000`,g_mSubstrateColorAdjust2:`1D3ED3B1DE070000803F0636001D20AB88431DD74CF06E1D569623D60619001D23C2097F062800063000062E0000`,g_mSubstrateColorAdjust3:`1D1574AB67070000803F0636001D7689317A1DF9EC4D611D75EE410C0619001D8F5996D4062800063000062E0000`,g_mSubstrateColorAdjust4:`1DACE00B56070000803F0636001D7C927D621D602AA52F1D2582BB9D0619001D9E31CF89062800063000062E0000`,g_mSurfaceBurnishingColorAdjust1:`1DFBC0EAAA070000803F0636001D3FAA8B301DF4DD57B21D57F7A35A0619001D8B36679E062800063000062E0000`,g_mSurfaceBurnishingColorAdjust2:`1D7E79C484070000803F0636001D960B7B0D1D0E1389121DD495BF6A0619001D6243C645062800063000062E0000`,g_mSurfaceBurnishingColorAdjust3:`1D71BF862D070000803F0636001D943B862A1DA7C4D1B21D4B49B1550619001D9E7D747A062800063000062E0000`,g_mSurfaceBurnishingColorAdjust4:`1D7AC07F55070000803F0636001D2772FB631DDFD591AD1DFAB56D7F0619001DDBF3424F062800063000062E0000`,g_mSurfaceColorAdjust1:`1D6869F2DE070000803F0636001DF2E408DA1DA1F9F3BB1D159B517B0619001D8B36679E062800063000062E0000`,g_mSurfaceColorAdjust2:`1D86E5E91F070000803F0636001D0C18D4391D3DA8EFA41D6F971FC40619001D6243C645062800063000062E0000`,g_mSurfaceColorAdjust3:`1D60571386070000803F0636001D21CA7E2A1D6C94709E1D68CD0DFA0619001D9E7D747A062800063000062E0000`,g_mSurfaceColorAdjust4:`1DD648AB7B070000803F0636001D9E839E531D948350E51D1F28AF2B0619001DDBF3424F062800063000062E0000`,g_nOutputMode:`1A0700`,g_nPatternReplaceIndex:`1D1E2C93B9070000803F1400`,g_vGrungeTexCoordXform0:`1D37B5C59A07D00F494015070000344316080009000601000801090006000008021D5AB1E7800803070000003F090307000000000E043A003F000903024400070000803F160804090018060100080509001806000008060904090515090409061514080709070906150904090515130808090109031509021809031507000000000903090115090715090309021815090815131DC0EE26BE1E00070000003F141306180000`,g_vGrungeTexCoordXform1:`1D37B5C59A07D00F494015070000344316080009000601000801090006000008021D5AB1E7800803070000003F090307000000000E043A003F000903024400070000803F16080409001806010008050900180600000806090409051509040906151408070907090615090409051513080809020903150901090315070000000009030902150907150903090115090815131DC0EE26BE1E55070000003F141306180000`,g_vGrungeTexRotationXform0:`1D37B5C59A1807D00F49401507000034431608000900060100080109000600000802070000803F0803070000003F090307000000000E043B0040000903024500070000803F160804090018060100080509001806000008060904090515090409061514080709070906150904090515130808090109031509021809031507000000000903090115090715090309021815090815130700000000070000003F141306180000`,g_vGrungeTexRotationXform1:`1D37B5C59A1807D00F49401507000034431608000900060100080109000600000802070000803F0803070000003F090307000000000E043B0040000903024500070000803F16080409001806010008050900180600000806090409051509040906151408070907090615090409051513080809020903150901090315070000000009030902150907150903090115090815130700000000070000003F141306180000`,g_vId1Color:`1D415FCC14061F0000`,g_vId2Color:`1DEA98E8AA061F0000`,g_vId3Color:`1DA8EB7800061F0000`,g_vId4Color:`1DA4BDEE70061F0000`,g_vId5Color:`1D7A111F14061F0000`,g_vId6Color:`1D2CA87B11061F0000`,g_vId7Color:`1D874051D0061F0000`,g_vId8Color:`1D19DCDADB061F0000`,g_vMetallicTextileAlbedoLevels:`070AD7A33D18079A99193F07713D8A3F0619001E00180765AAB83F180717B7D138070000803F070AD7A33D18079A99193F07713D8A3F0619001E5514061D00060C00150700000040070AD7A33D18079A99193F07713D8A3F0619001EAA1406190000`,g_vPatternTexCoordXform0:`1DAF03DDC7040A0013001DA6376422180218001DA637642207D00F494015070000344316080009000601000801090006000008021D4B83880D0803070000003F090307000000000E044D0052000903025700070000803F160804090018060100080509001806000008060904090515090409061514080709070906150904090515130808090109031509021809031507000000000903090115090715090309021815090815131D7FC066ED1E00070000003F141306180000`,g_vPatternTexCoordXform1:`1DAF03DDC7040A0013001DA6376422180218001DA637642207D00F494015070000344316080009000601000801090006000008021D4B83880D0803070000003F090307000000000E044D0052000903025700070000803F16080409001806010008050900180600000806090409051509040906151408070907090615090409051513080809020903150901090315070000000009030902150907150903090115090815131D7FC066ED1E55070000003F141306180000`,g_vPatternTexRotationXform0:`1DAF03DDC7040A0012001DA63764220218001DA63764221807D00F49401507000034431608000900060100080109000600000802070000803F0803070000003F090307000000000E044D0052000903025700070000803F160804090018060100080509001806000008060904090515090409061514080709070906150904090515130808090109031509021809031507000000000903090115090715090309021815090815130700000000070000003F141306180000`,g_vPatternTexRotationXform1:`1DAF03DDC7040A0012001DA63764220218001DA63764221807D00F49401507000034431608000900060100080109000600000802070000803F0803070000003F090307000000000E044D0052000903025700070000803F16080409001806010008050900180600000806090409051509040906151408070907090615090409051513080809020903150901090315070000000009030902150907150903090115090815130700000000070000003F141306180000`,g_vTextileAlbedoLevels:`07EC51383D18079A99193F070000803F0619001E00180765AAB83F180717B7D138070000803F07EC51383D18079A99193F070000803F0619001E5514061D00060C0015070000004007EC51383D18079A99193F070000803F0619001EAA1406190000`,g_fPatternNormalDistortion:`1DAC73973E07CDCCCC3D1500`,g_vDamageTexCoordXform0:`1DE376B23D07DB0F4940150700003443160800090006010008010900060000080209010902180700000000070000003F1D1A4797F61E00130902070000003F15130901070000003F151406180000`,g_vDamageTexCoordXform1:`1DE376B23D07DB0F49401507000034431608000900060100080109000600000802090209010700000000070000003F1D1A4797F61E55130902070000003F150901070000003F15131406180000`,g_vGrimeTexCoordXform0:`1D2829A78107DB0F4940150700003443160800090006010008010900060000080209010902180700000000070000003F1DD46A4A5D1E00130902070000003F15130901070000003F151406180000`,g_vGrimeTexCoordXform1:`1D2829A78107DB0F49401507000034431608000900060100080109000600000802090209010700000000070000003F1DD46A4A5D1E55130902070000003F150901070000003F15131406180000`},n={g_fPatternNormalDistortion:`1DAC73973E07CDCCCC3D1500`,g_vDamageTexCoordXform0:`1DE376B23D07DB0F4940150700003443160800090006010008010900060000080209010902180700000000070000003F1D1A4797F61E00130902070000003F15130901070000003F151406180000`,g_vDamageTexCoordXform1:`1DE376B23D07DB0F49401507000034431608000900060100080109000600000802090209010700000000070000003F1D1A4797F61E55130902070000003F150901070000003F15131406180000`,g_vGrimeTexCoordXform0:`1D2829A78107DB0F4940150700003443160800090006010008010900060000080209010902180700000000070000003F1DD46A4A5D1E00130902070000003F15130901070000003F151406180000`,g_vGrimeTexCoordXform1:`1D2829A78107DB0F49401507000034431608000900060100080109000600000802090209010700000000070000003F1DD46A4A5D1E55130902070000003F150901070000003F15131406180000`,g_vPatternTexCoordXform0:`1DA637642207DB0F4940150700003443160800090006010008010900060000080209011D5DB4D8D71E00150902181D5DB4D8D71E551507000000001D66412BCF1E001DA49496F81E001309021D66412BCF1E55151309011D66412BCF1E00151406180000`,g_vPatternTexCoordXform1:`1DA637642207DB0F4940150700003443160800090006010008010900060000080209021D5DB4D8D71E001509011D5DB4D8D71E551507000000001D66412BCF1E551DA49496F81E551309021D66412BCF1E001509011D66412BCF1E5515131406180000`},r={g_bDamageBevelBlendToSubstrate1:[0,0,0,0],g_bDamageBevelBlendToSubstrate2:[0,0,0,0],g_bDamageBevelBlendToSubstrate3:[0,0,0,0],g_bDamageBevelBlendToSubstrate4:[0,0,0,0],g_bDamageBevelUseTintMask1:[0,0,0,0],g_bDamageBevelUseTintMask2:[0,0,0,0],g_bDamageBevelUseTintMask3:[0,0,0,0],g_bDamageBevelUseTintMask4:[0,0,0,0],g_bFlipFixup:[0,0,0,0],g_bId1Pattern:[1,0,0,0],g_bId2Pattern:[1,0,0,0],g_bId3Pattern:[1,0,0,0],g_bId4Pattern:[1,0,0,0],g_bId5Pattern:[1,0,0,0],g_bId6Pattern:[1,0,0,0],g_bId7Pattern:[1,0,0,0],g_bId8Pattern:[1,0,0,0],g_bPattern:[0,0,0,0],g_bPatternPaintEmboss:[0,0,0,0],g_bPatternPaintLayer:[0,0,0,0],g_fBurnishingCloth1:[0,0,0,0],g_fBurnishingCloth2:[0,0,0,0],g_fBurnishingCloth3:[0,0,0,0],g_fBurnishingCloth4:[0,0,0,0],g_fBurnishingColorBrightness1:[1,0,0,0],g_fBurnishingColorBrightness2:[1,0,0,0],g_fBurnishingColorBrightness3:[1,0,0,0],g_fBurnishingColorBrightness4:[1,0,0,0],g_fBurnishingColorContrast1:[1,0,0,0],g_fBurnishingColorContrast2:[1,0,0,0],g_fBurnishingColorContrast3:[1,0,0,0],g_fBurnishingColorContrast4:[1,0,0,0],g_fBurnishingColorSaturation1:[1,0,0,0],g_fBurnishingColorSaturation2:[1,0,0,0],g_fBurnishingColorSaturation3:[1,0,0,0],g_fBurnishingColorSaturation4:[1,0,0,0],g_fBurnishingGrime1:[.5,0,0,0],g_fBurnishingGrime2:[.5,0,0,0],g_fBurnishingGrime3:[.5,0,0,0],g_fBurnishingGrime4:[.5,0,0,0],g_fBurnishingMetalness1:[0,0,0,0],g_fBurnishingMetalness2:[0,0,0,0],g_fBurnishingMetalness3:[0,0,0,0],g_fBurnishingMetalness4:[0,0,0,0],g_fBurnishingNormalScale1:[1,0,0,0],g_fBurnishingNormalScale2:[1,0,0,0],g_fBurnishingNormalScale3:[1,0,0,0],g_fBurnishingNormalScale4:[1,0,0,0],g_fColorMaskBlur:[2,0,0,0],g_fCurvaturePower1:[1,0,0,0],g_fCurvaturePower2:[1,0,0,0],g_fCurvaturePower3:[1,0,0,0],g_fCurvaturePower4:[1,0,0,0],g_fCurvatureWearBoost1:[0,0,0,0],g_fCurvatureWearBoost2:[0,0,0,0],g_fCurvatureWearBoost3:[0,0,0,0],g_fCurvatureWearBoost4:[0,0,0,0],g_fDamageBevelAnisotropy1:[0,0,0,0],g_fDamageBevelAnisotropy2:[0,0,0,0],g_fDamageBevelAnisotropy3:[0,0,0,0],g_fDamageBevelAnisotropy4:[0,0,0,0],g_fDamageBevelBlendSoftness1:[.5,0,0,0],g_fDamageBevelBlendSoftness2:[.5,0,0,0],g_fDamageBevelBlendSoftness3:[.5,0,0,0],g_fDamageBevelBlendSoftness4:[.5,0,0,0],g_fDamageBevelCloth1:[0,0,0,0],g_fDamageBevelCloth2:[0,0,0,0],g_fDamageBevelCloth3:[0,0,0,0],g_fDamageBevelCloth4:[0,0,0,0],g_fDamageBevelColorBrightness1:[1,0,0,0],g_fDamageBevelColorBrightness2:[1,0,0,0],g_fDamageBevelColorBrightness3:[1,0,0,0],g_fDamageBevelColorBrightness4:[1,0,0,0],g_fDamageBevelColorContrast1:[1,0,0,0],g_fDamageBevelColorContrast2:[1,0,0,0],g_fDamageBevelColorContrast3:[1,0,0,0],g_fDamageBevelColorContrast4:[1,0,0,0],g_fDamageBevelColorSaturation1:[1,0,0,0],g_fDamageBevelColorSaturation2:[1,0,0,0],g_fDamageBevelColorSaturation3:[1,0,0,0],g_fDamageBevelColorSaturation4:[1,0,0,0],g_fDamageBevelEmboss1:[1,0,0,0],g_fDamageBevelEmboss2:[1,0,0,0],g_fDamageBevelEmboss3:[1,0,0,0],g_fDamageBevelEmboss4:[1,0,0,0],g_fDamageBevelMetalness1:[0,0,0,0],g_fDamageBevelMetalness2:[0,0,0,0],g_fDamageBevelMetalness3:[0,0,0,0],g_fDamageBevelMetalness4:[0,0,0,0],g_fDamageBevelRoughnessBrightness1:[1,0,0,0],g_fDamageBevelRoughnessBrightness2:[1,0,0,0],g_fDamageBevelRoughnessBrightness3:[1,0,0,0],g_fDamageBevelRoughnessBrightness4:[1,0,0,0],g_fDamageBleaching1:[0,0,0,0],g_fDamageBleaching2:[0,0,0,0],g_fDamageBleaching3:[0,0,0,0],g_fDamageBleaching4:[0,0,0,0],g_fDamageBrightness1:[0,0,0,0],g_fDamageBrightness2:[0,0,0,0],g_fDamageBrightness3:[0,0,0,0],g_fDamageBrightness4:[0,0,0,0],g_fDamageCloth1:[0,0,0,0],g_fDamageCloth2:[0,0,0,0],g_fDamageCloth3:[0,0,0,0],g_fDamageCloth4:[0,0,0,0],g_fDamageEdgeMetalness1:[0,0,0,0],g_fDamageEdgeMetalness2:[0,0,0,0],g_fDamageEdgeMetalness3:[0,0,0,0],g_fDamageEdgeMetalness4:[0,0,0,0],g_fDamageEdgeRoughness1:[.8,0,0,0],g_fDamageEdgeRoughness2:[.8,0,0,0],g_fDamageEdgeRoughness3:[.8,0,0,0],g_fDamageEdgeRoughness4:[.8,0,0,0],g_fDamageHeightBlendSoftness1:[.01,0,0,0],g_fDamageHeightBlendSoftness2:[.01,0,0,0],g_fDamageHeightBlendSoftness3:[.01,0,0,0],g_fDamageHeightBlendSoftness4:[.01,0,0,0],g_fDamageMetalness1:[0,0,0,0],g_fDamageMetalness2:[0,0,0,0],g_fDamageMetalness3:[0,0,0,0],g_fDamageMetalness4:[0,0,0,0],g_fDamageNormalEdgeWidth1:[1,0,0,0],g_fDamageNormalEdgeWidth2:[1,0,0,0],g_fDamageNormalEdgeWidth3:[1,0,0,0],g_fDamageNormalEdgeWidth4:[1,0,0,0],g_fDamageRoughnessBrightness1:[1,0,0,0],g_fDamageRoughnessBrightness2:[1,0,0,0],g_fDamageRoughnessBrightness3:[1,0,0,0],g_fDamageRoughnessBrightness4:[1,0,0,0],g_fDamageRoughnessContrast1:[0,0,0,0],g_fDamageRoughnessContrast2:[0,0,0,0],g_fDamageRoughnessContrast3:[0,0,0,0],g_fDamageRoughnessContrast4:[0,0,0,0],g_fDamageSaturation1:[0,0,0,0],g_fDamageSaturation2:[0,0,0,0],g_fDamageSaturation3:[0,0,0,0],g_fDamageSaturation4:[0,0,0,0],g_fDamageUvScale1:[4,0,0,0],g_fDamageUvScale2:[4,0,0,0],g_fDamageUvScale3:[4,0,0,0],g_fDamageUvScale4:[4,0,0,0],g_fDetailAnisotropyScalar1:[0,0,0,0],g_fDetailAnisotropyScalar2:[0,0,0,0],g_fDetailAnisotropyScalar3:[0,0,0,0],g_fDetailAnisotropyScalar4:[0,0,0,0],g_fDetailBlackPoint1:[.047,0,0,0],g_fDetailBlackPoint2:[.047,0,0,0],g_fDetailBlackPoint3:[.047,0,0,0],g_fDetailBlackPoint4:[.047,0,0,0],g_fDetailBlackPointCompensation1:[0,0,0,0],g_fDetailBlackPointCompensation2:[0,0,0,0],g_fDetailBlackPointCompensation3:[0,0,0,0],g_fDetailBlackPointCompensation4:[0,0,0,0],g_fDetailCloth1:[0,0,0,0],g_fDetailCloth2:[0,0,0,0],g_fDetailCloth3:[0,0,0,0],g_fDetailCloth4:[0,0,0,0],g_fDetailGrunge1:[0,0,0,0],g_fDetailGrunge2:[0,0,0,0],g_fDetailGrunge3:[0,0,0,0],g_fDetailGrunge4:[0,0,0,0],g_fDetailMetalness1:[0,0,0,0],g_fDetailMetalness2:[0,0,0,0],g_fDetailMetalness3:[0,0,0,0],g_fDetailMetalness4:[0,0,0,0],g_fDetailNormalContrast1:[1,0,0,0],g_fDetailNormalContrast2:[1,0,0,0],g_fDetailNormalContrast3:[1,0,0,0],g_fDetailNormalContrast4:[1,0,0,0],g_fDetailRoughnessBrightness1:[1,0,0,0],g_fDetailRoughnessBrightness2:[1,0,0,0],g_fDetailRoughnessBrightness3:[1,0,0,0],g_fDetailRoughnessBrightness4:[1,0,0,0],g_fDetailRoughnessContrast1:[0,0,0,0],g_fDetailRoughnessContrast2:[0,0,0,0],g_fDetailRoughnessContrast3:[0,0,0,0],g_fDetailRoughnessContrast4:[0,0,0,0],g_fDetailScale1:[4,0,0,0],g_fDetailScale2:[4,0,0,0],g_fDetailScale3:[4,0,0,0],g_fDetailScale4:[4,0,0,0],g_fFlipFixup:[0,0,0,0],g_fGrimeBrightness1:[0,0,0,0],g_fGrimeBrightness2:[0,0,0,0],g_fGrimeBrightness3:[0,0,0,0],g_fGrimeBrightness4:[0,0,0,0],g_fGrimeRoughnessBrightness1:[1,0,0,0],g_fGrimeRoughnessBrightness2:[1,0,0,0],g_fGrimeRoughnessBrightness3:[1,0,0,0],g_fGrimeRoughnessBrightness4:[1,0,0,0],g_fGrimeSaturation1:[0,0,0,0],g_fGrimeSaturation2:[0,0,0,0],g_fGrimeSaturation3:[0,0,0,0],g_fGrimeSaturation4:[0,0,0,0],g_fGrimeTranslucency1:[.5,0,0,0],g_fGrimeTranslucency2:[.5,0,0,0],g_fGrimeTranslucency3:[.5,0,0,0],g_fGrimeTranslucency4:[.5,0,0,0],g_fGrimeUvScale1:[4,0,0,0],g_fGrimeUvScale2:[4,0,0,0],g_fGrimeUvScale3:[4,0,0,0],g_fGrimeUvScale4:[4,0,0,0],g_fGrungeMax1:[1,0,0,0],g_fGrungeMax2:[1,0,0,0],g_fGrungeMax3:[1,0,0,0],g_fGrungeMax4:[1,0,0,0],g_fGrungeRoughnessBrightness1:[.8,0,0,0],g_fGrungeRoughnessBrightness2:[.8,0,0,0],g_fGrungeRoughnessBrightness3:[.8,0,0,0],g_fGrungeRoughnessBrightness4:[.8,0,0,0],g_fGrungeTexCoordOffset:[0,0,0,0],g_fGrungeTexCoordRotation:[0,0,0,0],g_fGrungeTexCoordScale:[2.5,0,0,0],g_fPaintDurability:[.5,0,0,0],g_fPaintShadowPower:[0,0,0,0],g_fPaintThickness:[1,0,0,0],g_fPatternCloth:[0,0,0,0],g_fPatternDetailInfluence:[0,0,0,0],g_fPatternEmboss:[.5,0,0,0],g_fPatternMetalness:[0,0,0,0],g_fPatternPaintRespectsTintMask:[0,0,0,0],g_fPatternRoughnessBrightness:[1,0,0,0],g_fPatternTexCoordOffset:[0,0,0,0],g_fPatternTexCoordRotation:[0,0,0,0],g_fPatternTexCoordScale:[2.5,0,0,0],g_fPatternTranslucencyThreshold:[.01,0,0,0],g_fPuffyPaintNormalSoftness:[0,0,0,0],g_fSubstrateBurnishingRoughnessBrightness1:[1,0,0,0],g_fSubstrateBurnishingRoughnessBrightness2:[1,0,0,0],g_fSubstrateBurnishingRoughnessBrightness3:[1,0,0,0],g_fSubstrateBurnishingRoughnessBrightness4:[1,0,0,0],g_fSubstrateColorBrightness1:[1,0,0,0],g_fSubstrateColorBrightness2:[1,0,0,0],g_fSubstrateColorBrightness3:[1,0,0,0],g_fSubstrateColorBrightness4:[1,0,0,0],g_fSubstrateColorContrast1:[1,0,0,0],g_fSubstrateColorContrast2:[1,0,0,0],g_fSubstrateColorContrast3:[1,0,0,0],g_fSubstrateColorContrast4:[1,0,0,0],g_fSubstrateColorSaturation1:[1,0,0,0],g_fSubstrateColorSaturation2:[1,0,0,0],g_fSubstrateColorSaturation3:[1,0,0,0],g_fSubstrateColorSaturation4:[1,0,0,0],g_fSubstrateCompositeColorTranslucency1:[.5,0,0,0],g_fSubstrateCompositeColorTranslucency2:[.5,0,0,0],g_fSubstrateCompositeColorTranslucency3:[.5,0,0,0],g_fSubstrateCompositeColorTranslucency4:[.5,0,0,0],g_fSubstratePatternMipBias:[0,0,0,0],g_fSurfaceBurnishingRoughnessBrightness1:[1,0,0,0],g_fSurfaceBurnishingRoughnessBrightness2:[1,0,0,0],g_fSurfaceBurnishingRoughnessBrightness3:[1,0,0,0],g_fSurfaceBurnishingRoughnessBrightness4:[1,0,0,0],g_fSurfaceColorBrightness1:[1,0,0,0],g_fSurfaceColorBrightness2:[1,0,0,0],g_fSurfaceColorBrightness3:[1,0,0,0],g_fSurfaceColorBrightness4:[1,0,0,0],g_fSurfaceColorContrast1:[1,0,0,0],g_fSurfaceColorContrast2:[1,0,0,0],g_fSurfaceColorContrast3:[1,0,0,0],g_fSurfaceColorContrast4:[1,0,0,0],g_fSurfaceColorSaturation1:[1,0,0,0],g_fSurfaceColorSaturation2:[1,0,0,0],g_fSurfaceColorSaturation3:[1,0,0,0],g_fSurfaceColorSaturation4:[1,0,0,0],g_fWearBleaching1:[.25,0,0,0],g_fWearBleaching2:[.25,0,0,0],g_fWearBleaching3:[.25,0,0,0],g_fWearBleaching4:[.25,0,0,0],g_fWearExponent:[1,0,0,0],g_fWearProgress:[0,0,0,0],g_flSheenScale:[.667,0,0,0],g_mDamageColorAdjust1:[0,0,0,0],g_mDamageColorAdjust2:[0,0,0,0],g_mDamageColorAdjust3:[0,0,0,0],g_mDamageColorAdjust4:[0,0,0,0],g_mSubstrateBurnishingColorAdjust1:[0,0,0,0],g_mSubstrateBurnishingColorAdjust2:[0,0,0,0],g_mSubstrateBurnishingColorAdjust3:[0,0,0,0],g_mSubstrateBurnishingColorAdjust4:[0,0,0,0],g_mSubstrateColorAdjust1:[0,0,0,0],g_mSubstrateColorAdjust2:[0,0,0,0],g_mSubstrateColorAdjust3:[0,0,0,0],g_mSubstrateColorAdjust4:[0,0,0,0],g_mSurfaceBurnishingColorAdjust1:[0,0,0,0],g_mSurfaceBurnishingColorAdjust2:[0,0,0,0],g_mSurfaceBurnishingColorAdjust3:[0,0,0,0],g_mSurfaceBurnishingColorAdjust4:[0,0,0,0],g_mSurfaceColorAdjust1:[0,0,0,0],g_mSurfaceColorAdjust2:[0,0,0,0],g_mSurfaceColorAdjust3:[0,0,0,0],g_mSurfaceColorAdjust4:[0,0,0,0],g_nOutputMode:[0,0,0,0],g_nPatternMode:[0,0,0,0],g_nPatternReplaceIndex:[1,0,0,0],g_vBurnishingColorTint1:[1,1,1,0],g_vBurnishingColorTint2:[1,1,1,0],g_vBurnishingColorTint3:[1,1,1,0],g_vBurnishingColorTint4:[1,1,1,0],g_vColorTint1:[.15,.11,.08,0],g_vColorTint2:[.23,.16,.26,0],g_vColorTint3:[.16,.16,.28,0],g_vColorTint4:[.2,.3,.3,0],g_vColorTint5:[.09,.16,.1,0],g_vColorTint6:[.29,.26,.11,0],g_vColorTint7:[.32,.22,.12,0],g_vColorTint8:[.21,.12,.09,0],g_vDamageBevelColorTint1:[1,1,1,0],g_vDamageBevelColorTint2:[1,1,1,0],g_vDamageBevelColorTint3:[1,1,1,0],g_vDamageBevelColorTint4:[1,1,1,0],g_vDamageLevels1:[0,1,0,0],g_vDamageLevels2:[0,1,0,0],g_vDamageLevels3:[0,1,0,0],g_vDamageLevels4:[0,1,0,0],g_vDamageMinMax1:[0,1,0,0],g_vDamageMinMax2:[0,1,0,0],g_vDamageMinMax3:[0,1,0,0],g_vDamageMinMax4:[0,1,0,0],g_vGrungeTexCoordXform0:[0,0,0,0],g_vGrungeTexCoordXform1:[0,0,0,0],g_vGrungeTexRotationXform0:[0,0,0,0],g_vGrungeTexRotationXform1:[0,0,0,0],g_vId1Color:[1,1,1,1],g_vId2Color:[1,1,1,1],g_vId3Color:[1,1,1,1],g_vId4Color:[1,1,1,1],g_vId5Color:[1,1,1,1],g_vId6Color:[1,1,1,1],g_vId7Color:[1,1,1,1],g_vId8Color:[1,1,1,1],g_vMetallicTextileAlbedoLevels:[0,0,0,0],g_vPatternPaletteIndices:[5,6,7,8],g_vPatternRoughnessContrastBrightness:[1,0,0,0],g_vPatternTexCoordXform0:[0,0,0,0],g_vPatternTexCoordXform1:[0,0,0,0],g_vPatternTexRotationXform0:[0,0,0,0],g_vPatternTexRotationXform1:[0,0,0,0],g_vSubstrateBurnishingMinMax1:[0,1,0,0],g_vSubstrateBurnishingMinMax2:[0,1,0,0],g_vSubstrateBurnishingMinMax3:[0,1,0,0],g_vSubstrateBurnishingMinMax4:[0,1,0,0],g_vSubstrateColorTint1:[1,1,1,0],g_vSubstrateColorTint2:[1,1,1,0],g_vSubstrateColorTint3:[1,1,1,0],g_vSubstrateColorTint4:[1,1,1,0],g_vSubstrateGrimeMinMax1:[0,1,0,0],g_vSubstrateGrimeMinMax2:[0,1,0,0],g_vSubstrateGrimeMinMax3:[0,1,0,0],g_vSubstrateGrimeMinMax4:[0,1,0,0],g_vSurfaceBurnishingMinMax1:[0,1,0,0],g_vSurfaceBurnishingMinMax2:[0,1,0,0],g_vSurfaceBurnishingMinMax3:[0,1,0,0],g_vSurfaceBurnishingMinMax4:[0,1,0,0],g_vSurfaceColorTint1:[1,1,1,0],g_vSurfaceColorTint2:[1,1,1,0],g_vSurfaceColorTint3:[1,1,1,0],g_vSurfaceColorTint4:[1,1,1,0],g_vSurfaceGrimeMinMax1:[0,1,0,0],g_vSurfaceGrimeMinMax2:[0,1,0,0],g_vSurfaceGrimeMinMax3:[0,1,0,0],g_vSurfaceGrimeMinMax4:[0,1,0,0],g_vTextileAlbedoLevels:[0,0,0,0],g_fDamageTexCoordRotation:[0,0,0,0],g_fGrimeTexCoordRotation:[0,0,0,0],g_fPatternNormalDistortion:[0,0,0,0],g_vDamageTexCoordOffset:[0,0,0,0],g_vDamageTexCoordXform0:[0,0,0,0],g_vDamageTexCoordXform1:[0,0,0,0],g_vGrimeTexCoordOffset:[0,0,0,0],g_vGrimeTexCoordXform0:[0,0,0,0],g_vGrimeTexCoordXform1:[0,0,0,0],g_vPatternTexCoordCenter:[.5,.5,0,0],g_vPatternTexCoordOffset:[0,0,0,0],g_vPatternTexCoordScale:[1,1,0,0],g_vUvOffset1:[0,0,0,0],g_vUvOffset2:[0,0,0,0],g_vUvOffset3:[0,0,0,0],g_vUvOffset4:[0,0,0,0],g_vUvScale1:[4,4,0,0],g_vUvScale2:[4,4,0,0],g_vUvScale3:[4,4,0,0],g_vUvScale4:[4,4,0,0],g_vViewport:[0,0,0,0]},i={"0078eba8":`g_vId3Color`,"00e3b64d":`g_fDamageBevelRoughnessBrightness4`,"011e526c":`TexturePatternMetalness`,"01a504c0":`g_tSubstrateNormal1`,"01ae67b7":`g_fPatternEmboss`,"01f9c5f4":`g_mSurfaceColorAdjust4`,"037e10ea":`g_fFlipFixup`,"04508b34":`TextureSubstrateAmbientOcclusion2`,"055dfc50":`g_bId4Pattern`,"05e4c602":`g_vUvOffset2`,"06387888":`g_fDamageSaturation3`,"06d183f7":`g_tDetailNormal3`,"072675e9":`g_fDamageBevelColorSaturation2`,"07b4b96e":`g_mSurfaceBurnishingColorAdjust1`,"08393e45":`TextureSurfaceRoughness3`,"0891d5f0":`g_vGrungeTexRotationXform1`,"08ae23b1":`g_bDamageBevelBlendToSubstrate3`,"09113a45":`g_fDamageMetalness2`,"091d7a27":`g_tDamageNormal1`,"091e64c7":`g_vPatternTexRotationXform1`,"096f8fa2":`TextureDetailNormal3`,"09d50464":`g_fDamageBrightness1`,"0a46a9c0":`g_fDamageCloth2`,"0a9e6a88":`g_fDamageEdgeRoughness2`,"0b857ac2":`g_fGrimeRoughnessBrightness1`,"0c41ee75":`g_fSubstrateColorBrightness3`,"0c9c6ac3":`g_fDamageHeightBlendSoftness3`,"0d2af2ea":`g_fDamageRoughnessBrightness3`,"0d7b0b96":`g_fBurnishingColorContrast2`,"0d88834b":`g_fPatternTexCoordScale`,"0daae5b7":`g_fCurvatureWearBoost1`,"0db06369":`g_fBurnishingGrime3`,"0e3f4b4a":`TextureObjectAmbientOcclusion`,"0e9f1ac1":`g_mSurfaceColorAdjust3`,"0f555355":`g_fDamageHeightBlendSoftness2`,"1063a0c0":`g_fGrimeSaturation1`,"117ba82c":`g_vId6Color`,"11a326fb":`g_fDamageNormalEdgeWidth3`,"11ed835b":`g_fGrimeBrightness1`,"1274324b":`TextureSubstrateTintMask3`,"1289130e":`g_fBurnishingColorSaturation2`,"12dbd88e":`TextureSurfaceRoughness4`,"12e61aaa":`g_fBurnishingNormalScale1`,"1353f782":`g_tDetail2`,"13f6b4f5":`g_vDamageTexCoordXform1`,"141f117a":`g_vId5Color`,"14cc5f41":`g_vId1Color`,"15d7f7a3":`g_mDamageColorAdjust4`,"15e2b983":`TextureSurfaceClothMask1`,"17fec7b6":`TextureSurfaceAlbedo3`,18636625:`g_vColorTint4`,"188c4fc3":`g_fPatternDetailInfluence`,"1a1d5310":`g_fWearBleaching1`,"1a23fc09":`g_tDetailNormal2`,"1a2b9720":`TextureDetailNormal2`,"1a4fd000":`g_fDamageMetalness1`,"1abdf409":`g_fGrimeUvScale1`,"1af4eb7b":`g_tDetailNormal4`,"1b2f5482":`g_fDetailNormalContrast3`,"1b5b74af":`g_tSurfaceNormal4`,"1b694acf":`g_fDamageBleaching3`,"1b941345":`g_vDamageMinMax2`,"1bfd4c8f":`g_fDamageHeightBlendSoftness4`,"1c0e8703":`g_fSubstrateCompositeColorTranslucency2`,"1c4fa16f":`g_tNormal`,"1d729380":`TextureSubstrateClothMask1`,"1d9bc8cd":`g_tLayerId`,"1db56e65":`g_fDetailCloth3`,"1ddb4827":`TextureSubstrateAlbedo3`,"1e440ef8":`g_fDamageUvScale3`,"1e69c2dd":`TextureDetail2`,"1e739fd8":`TextureDetail1`,"1fd3987b":`TextureDamageNormal3`,"1fe9e586":`g_vSurfaceColorTint2`,"201f0a08":`g_fDetailAnisotropyScalar3`,"2042ca47":`g_fGrimeUvScale2`,"2231cd4c":`g_fDamageRoughnessContrast3`,"22388c93":`g_tSubstrateNormal4`,"2259f75f":`g_fDetailBlackPoint2`,"225ef70f":`g_fBurnishingMetalness2`,"226437a6":`g_fPatternTexCoordRotation`,"22d6c06e":`g_mSurfaceColorAdjust2`,"2320e30c":`g_vGrimeTexCoordXform1`,"251c1d4f":`g_fDamageRoughnessContrast4`,"26324d8e":`g_fBurnishingMetalness3`,"266b8ee9":`g_fDamageEdgeMetalness2`,"28267d14":`g_tDetail4`,"28c22858":`g_fPaintDurability`,"28cf5e40":`g_fDetailScale1`,"29ebf23e":`g_fDamageBevelColorSaturation4`,"2a20126b":`g_fWearExponent`,"2a7eca21":`g_fSurfaceColorContrast3`,"2a863b94":`g_fBurnishingColorContrast3`,"2b9bb912":`TextureGrunge1`,"2ba64e6f":`g_vDamageMinMax3`,"2baf281f":`g_fSurfaceColorBrightness4`,"2d86bf71":`g_vBurnishingColorTint3`,"2e54505c":`g_lightBinnerGpuSet`,"2e7ac729":`g_fDamageBevelEmboss1`,"2f0d8ccf":`g_vPatternTexCoordXform0`,"2f1cbc5d":`g_fDamageEdgeRoughness4`,"2fa52a60":`g_fSubstrateColorSaturation4`,"3003c269":`g_fDamageBevelRoughnessBrightness2`,"308baa3f":`g_fBurnishingColorContrast1`,"30a8a8a3":`g_vDamageBevelColorTint2`,"30f93864":`g_fPatternPaintRespectsTintMask`,"31134d1d":`g_fPatternCloth`,"321d924f":`g_mSurfaceColorAdjust1`,"33b5d7de":`g_bDamageBevelBlendToSubstrate4`,"33c7c361":`g_fDamageEdgeMetalness4`,"33f58be9":`g_tDamageNormal2`,"348c67af":`TextureSurfaceProperties`,"349c6c2a":`g_mDamageColorAdjust3`,"355cdc31":`g_bPatternPaintEmboss`,"35d81762":`g_fDamageBevelCloth2`,"360143f2":`g_tSurfaceNormal1`,"37eacbf2":`g_fDetailCloth2`,"39d4180c":`g_fSurfaceColorContrast2`,"3a021b6a":`g_fDetailGrunge3`,"3abc8323":`g_bId8Pattern`,"3b3cfcfe":`g_vSubstrateGrimeMinMax2`,"3bb90a83":`TextureDamageNormal1`,"3c037b16":`g_vSurfaceBurnishingMinMax4`,"3c821d80":`g_fGrungeMax1`,"3cdb5121":`g_tSurfaceNormal3`,"3cec0a08":`g_fSubstratePatternMipBias`,"3d65696b":`g_mSubstrateBurnishingColorAdjust1`,"3d71a61a":`TextureSurfaceClothMask4`,"3db276e3":`g_fDamageTexCoordRotation`,"3e5bbf03":`TextureGrime4`,"3e6b3401":`TextureSurfaceAlbedo2`,"3e9773ac":`g_fPatternNormalDistortion`,"3f1ea128":`g_fCurvaturePower1`,"3f22861a":`TextureObjectCurvature`,"3f6c6bbd":`g_tGrime1`,"3f8b0317":`TextureDetail4`,"3f900c26":`g_fDamageEdgeMetalness3`,"401a595e":`g_fDetailMetalness1`,"4046da0f":`TextureSubstrateClothMask2`,"4052b633":`g_tDetail1`,"40973f67":`TextureSubstrateMetalness2`,"430162ac":`g_vGrungeTexRotationXform0`,"436be541":`g_vSubstrateBurnishingMinMax2`,"437122f9":`g_mSubstrateColorAdjust1`,"4383d198":`g_flSheenScale`,"4388ab20":`g_fSubstrateColorContrast2`,"43a561dc":`TextureSubstrateTintMask2`,"43e18be3":`TextureSurfaceTintMask2`,"43e87a52":`TextureSurfaceClothMask2`,44548738:`g_mDamageColorAdjust2`,"4549a26d":`g_bId6Pattern`,"45c64362":`g_tSurface2`,"45d8f417":`g_vPatternPaletteIndices`,"4608a773":`g_fDamageRoughnessBrightness4`,"4667f97c":`g_fDetailGrunge2`,"468f932c":`g_tSubstrateNormal2`,"47628d8f":`g_vDamageBevelColorTint3`,"4862cf1c":`TextureSubstrateHeight2`,"491eac37":`g_tSurfaceNormal2`,"4b27a596":`g_fGrimeUvScale4`,"4b726106":`g_tPattern`,"4bd558d4":`g_nOutputMode`,"4c1f205b":`g_fDetailBlackPointCompensation2`,"4c5fec5e":`g_fDetailNormalContrast1`,"4c813b1c":`g_fGrimeSaturation4`,"4cada302":`TextureSurfaceMetalness3`,"4d0121fd":`g_fPuffyPaintNormalSoftness`,"4e0886b8":`TextureSubstrateHeight4`,"4f42f3db":`g_tSurface4`,"52044f14":`g_fGrungeRoughnessBrightness3`,"52da9942":`g_vMetallicTextileAlbedoLevels`,"539e839e":`g_fSurfaceColorContrast4`,"5495b67f":`g_fDamageBleaching4`,"554377cd":`g_tGrime4`,"557fc07a":`g_vBurnishingColorTint4`,"55b1494b":`g_fBurnishingColorBrightness3`,"55d3e5e6":`g_fGrungeMax3`,"560be0ac":`g_vSubstrateColorTint4`,"56550fd6":`TextureObjectHighTouchMask`,"566a5ab7":`g_fDamageBevelCloth1`,"569ad714":`g_vSurfaceBurnishingMinMax2`,"56db7331":`g_vSurfaceGrimeMinMax1`,"574cde91":`AddressV`,"580c6f85":`TextureSurfaceMetalness2`,"58feb055":`g_nPatternMode`,"591fdc59":`g_fDetailRoughnessBrightness1`,"5959d6eb":`TextureSubstrateAlbedo2`,"5961893e":`TextureSubstrateNormal4`,"59f89857":`g_bPatternPaintLayer`,"5aa3f757":`g_fBurnishingColorBrightness1`,"5bbdf58b":`g_tSubstrate1`,"5c325960":`g_vViewport`,"5d4a6ad4":`g_vGrimeTexCoordOffset`,"5d4e228c":`g_fDamageNormalEdgeWidth2`,"5d7da176":`g_fGrimeTranslucency3`,"5de1dc54":`g_fDamageEdgeMetalness1`,"5e229792":`g_fDetailScale4`,"5e3390c1":`TextureSurfaceAmbientOcclusion2`,"5f1dd802":`g_tPatternProperties`,"5f294889":`TextureSurfaceNormal3`,"5f3754a5":`g_fGrungeRoughnessBrightness1`,"5fe41349":`TextureObjectNormal`,"601aac32":`g_fPatternRoughnessBrightness`,"614decf9":`g_fSubstrateColorSaturation3`,"619ee63b":`g_vPatternTexCoordXform1`,"61e78d48":`g_fDetailScale2`,"623e141e":`TextureSubstrateRoughness2`,"627d927c":`g_fSubstrateColorContrast4`,"62dbc7cd":`g_vTextileAlbedoLevels`,63999457:`g_bDamageBevelBlendToSubstrate2`,"639a81f8":`g_vDamageLevels3`,"63fb7227":`g_fBurnishingColorContrast4`,"65cce958":`g_fDetailBlackPoint4`,"65d6a0fe":`g_bId1Pattern`,"65fe917f":`g_fBurnishingCloth2`,"66b5b45d":`TextureSurfaceAmbientOcclusion4`,"66d1e4e1":`TextureGrunge2`,"6721950d":`g_fDamageBevelColorBrightness2`,"679f762d":`g_bDamageBevelUseTintMask3`,"67ab7415":`g_vSubstrateColorTint3`,"67f08f35":`AddressU`,68099547:`g_fDamageCloth1`,"68e82e75":`g_fDetailNormalContrast2`,"6a193c34":`g_vPatternRoughnessContrastBrightness`,"6a54fd5f":`g_fGrimeRoughnessBrightness2`,"6abf95d4":`g_fBurnishingColorBrightness2`,"6ba381ac":`g_mSurfaceBurnishingColorAdjust4`,"6bb230d4":`TextureDamageHeight2`,"6c7b644f":`g_fGrimeBrightness2`,"6cbcb13f":`g_tSubstrateProperties4`,"6d3d4a22":`g_fSubstrateBurnishingRoughnessBrightness2`,"6dc82dce":`g_fDetailAnisotropyScalar4`,"6e52eaa2":`g_fDetailBlackPoint1`,"6e645906":`g_vUvOffset4`,"6ef04cd7":`g_fSubstrateColorSaturation2`,"6f17d804":`g_fDetailRoughnessBrightness3`,"6f532f6c":`g_fDamageBevelEmboss4`,"6f71db95":`g_mSubstrateColorAdjust4`,"700d3f41":`g_fDamageBevelMetalness3`,"70e3df9f":`g_bDamageBevelUseTintMask1`,"70eebda4":`g_vId4Color`,"7111f6a7":`g_fDamageBleaching2`,"7155be68":`g_fDamageBevelColorBrightness4`,"721d4df5":`g_fSubstrateCompositeColorTranslucency4`,73304208:`g_tDetailNormal1`,"7440dd34":`TextureSurfaceAlbedo1`,"75096d63":`TextureSurfaceHeight3`,"761ca2c4":`g_fDetailRoughnessBrightness2`,"783e0467":`g_bId3Pattern`,"7a318976":`g_fSubstrateColorContrast3`,"7a747d9e":`g_tSurface3`,"7b519b15":`g_fSurfaceColorBrightness1`,"7bab48d6":`g_vSurfaceColorTint4`,"7bb24dc1":`TextureSubstrateNormal1`,"7c0621d9":`g_fDamageNormalEdgeWidth1`,"7c24b021":`g_tGrime3`,"7cd202c8":`g_fSubstrateBurnishingRoughnessBrightness1`,"7cd9fb35":`g_fDamageBevelCloth4`,"7d7dd2c6":`g_tGrunge2`,"7e0cdc18":`g_tLayerMask`,"7e33ddd9":`g_vSubstrateGrimeMinMax4`,"7ee6bb7a":`g_fSubstrateCompositeColorTranslucency1`,"7f09c223":`g_tSubstrate2`,"7f6db5fa":`g_fBurnishingColorBrightness4`,"805cce0c":`TextureGrime2`,"80e7b15a":`g_fGrungeTexCoordScale`,"80ec1862":`g_vSurfaceBurnishingMinMax3`,"81a72928":`g_fGrimeTexCoordRotation`,"83f6134e":`g_fDamageBevelColorBrightness1`,"841658bf":`TextureSubstrateAmbientOcclusion4`,"84c4797e":`g_vBurnishingColorTint2`,"85cfad73":`g_vColorTint8`,86135760:`g_vSurfaceColorTint3`,"8628fe10":`g_fDamageBevelAnisotropy4`,"866ed962":`g_fDetailGrunge4`,"87af4d42":`g_fDetailRoughnessBrightness4`,"87cbf404":`g_fDamageSaturation4`,88063961:`TexturePatternColor`,"88a80e01":`g_fDamageHeightBlendSoftness1`,"89260a3d":`g_tDamage1`,"89cf319e":`g_tSubstrate4`,"89e3a828":`g_fDamageBevelRoughnessBrightness3`,"8a23fbe4":`TextureDamageHeight1`,"8a5b6fd0":`g_fBurnishingNormalScale2`,"8a9de057":`TextureSubstrateMetalness1`,"8aa91863":`g_fDetailMetalness2`,"8acedbba":`g_fGrungeRoughnessBrightness4`,"8b6a1184":`g_vColorTint1`,"8e5a4f01":`g_fDamageBevelAnisotropy3`,"8ebd342e":`g_vGrungeTexCoordXform1`,"8ed927d9":`TextureSurfaceTintMask1`,"8f6fc30c":`g_fBurnishingGrime2`,"90138a02":`g_fDamageRoughnessContrast2`,"908d562a":`TextureDetail3`,"90ce1a41":`TextureSurfaceAmbientOcclusion3`,"9119fc4b":`g_fBurnishingMetalness1`,"92478c95":`g_fGrungeMax4`,93709738:`g_fWearProgress`,"93f3bf2d":`g_vSurfaceBurnishingMinMax1`,"94368dd6":`g_fPaintThickness`,"94af4ca4":`g_fSurfaceBurnishingRoughnessBrightness1`,"959172bf":`g_fDamageRoughnessContrast1`,"962a4453":`TexturePatternTranslucency`,"9645f27b":`g_fDetailBlackPointCompensation1`,"964686d3":`g_fDamageEdgeRoughness1`,"97bc4ad9":`g_fGrimeTranslucency1`,"97f4de09":`g_fBurnishingMetalness4`,"98030dca":`TextureDamageHeight4`,"987b2dab":`g_fDamageBevelColorContrast1`,"98e105f2":`g_fDamageUvScale4`,"98f971fb":`g_tSurfaceProperties3`,"994f9efd":`g_vDamageLevels4`,"9ac5b537":`g_fGrungeTexCoordRotation`,"9af0e8c8":`g_fBurnishingCloth1`,"9bee818a":`g_mDamageColorAdjust1`,"9ce45af4":`g_fBurnishingNormalScale3`,"9d164228":`g_fSubstrateColorContrast1`,"9d3694ca":`g_fDetailGrunge1`,"9d59bd4c":`g_fDamageCloth4`,"9dbb8225":`g_fSubstrateColorBrightness4`,"9dd3c20b":`TextureSurfaceMetalness4`,"9e0792ce":`g_fDetailMetalness4`,"9e42a524":`g_vSubstrateBurnishingMinMax3`,"9e67368b":`g_tSurface1`,"9e70946c":`g_fSurfaceColorSaturation3`,"9f6c1e7c":`g_fSubstrateCompositeColorTranslucency3`,"9fee96be":`g_fBurnishingGrime4`,a03b85c2:`g_fDamageMetalness4`,a04a22c1:`TextureGrunge3`,a07b2b87:`g_vPatternTexRotationXform0`,a0cedc03:`TextureNormal`,a14d3c7a:`g_fPaintShadowPower`,a15717a4:`TextureSurfaceNormal2`,a2122e19:`g_tSubstrateProperties3`,a220b5d6:`g_fCurvaturePower4`,a2542cb7:`TextureObjectMaterialId`,a281f3b7:`TextureObjectTintId`,a37b6b40:`TextureSubstrateNormal3`,a3835f3f:`g_fDetailRoughnessContrast4`,a3aff68a:`g_fDamageBevelBlendSoftness2`,a3cc9f02:`TextureSurfaceTintMask3`,a41839ae:`g_fGrungeRoughnessBrightness2`,a4bef996:`TextureSubstrateAlbedo4`,a4efa83d:`g_fSurfaceColorSaturation2`,a5d3aa3e:`g_fDamageBevelBlendSoftness3`,a5f4d18b:`g_fSubstrateBurnishingRoughnessBrightness3`,a6265585:`g_fDetailRoughnessContrast2`,a63e6784:`g_tSubstrateNormal3`,a6d01cf0:`g_fDetailAnisotropyScalar2`,a72f3ff9:`g_fDamageSaturation2`,a7e95188:`g_tGrunge3`,a81e9ab9:`g_fPatternTranslucencyThreshold`,a833c42e:`g_vSubstrateBurnishingMinMax1`,a92d5fcc:`TextureSurfaceHeight1`,aa016680:`g_tGrime2`,aa02b5fd:`g_tNoise`,aa2315fc:`TexturePatternRoughness`,aae898ea:`g_vId2Color`,aaeac0fb:`g_vBurnishingColorTint1`,aafdc8df:`g_fDamageRoughnessBrightness2`,ab9c50ad:`TextureSurfaceAlbedo4`,ac277c36:`g_bPattern`,aca2b1c0:`g_vColorTint7`,acc7ae81:`TextureSubstrateMetalness3`,ad91d5df:`g_fBurnishingColorSaturation4`,adca3dee:`g_fDamageNormalEdgeWidth4`,ae3ba099:`g_fCurvatureWearBoost3`,ae4e02f7:`g_fDamageBevelEmboss2`,aed81a4f:`g_tDamage4`,aeecadb7:`TextureSurfaceRoughness1`,af93288e:`g_vColorTint3`,afddd11c:`g_vDamageMinMax4`,b0004313:`g_vUvScale3`,b024e98f:`g_bId5Pattern`,b0306552:`g_fGrimeBrightness3`,b0f38cc6:`g_fColorMaskBlur`,b18956b8:`g_fDetailBlackPointCompensation4`,b1c4cda4:`g_fDamageMetalness3`,b1e684c7:`g_tDamageNormal3`,b257ddf4:`g_fBurnishingColorSaturation1`,b29dbbf5:`g_fDamageEdgeRoughness3`,b2d1c4a7:`g_fBurnishingColorSaturation3`,b37d8e39:`TextureSubstrateHeight3`,b3820f2c:`g_tDetail3`,b3a1c7d4:`g_fGrimeRoughnessBrightness4`,b3eba23d:`g_fDamageBevelBlendSoftness1`,b3fc22a9:`g_vSurfaceGrimeMinMax3`,b4012c62:`g_fGrungeMax2`,b40390a7:`g_fDetailNormalContrast4`,b421d308:`g_vUvScale4`,b4aebc33:`TextureSubstrateNormal2`,b644c159:`g_fWearBleaching3`,b6ee8cbf:`g_fCurvatureWearBoost4`,b7558e27:`g_vGrungeTexCoordXform0`,b83132dd:`g_fDamageBevelEmboss3`,b9932c1e:`g_nPatternReplaceIndex`,b9ce66ee:`g_tDamage2`,b9d57248:`g_tTintId`,b9eaf36c:`g_fDetailMetalness3`,ba27de6a:`TextureSubstrateTintMask4`,ba4276ad:`MaxAniso`,baa45be1:`TextureGrime3`,bb6511e9:`g_vUvOffset1`,bb6efa26:`g_vSubstrateColorTint1`,bbb8c18c:`AllowGlobalMipBiasOverride`,bbf3f9a1:`g_fSurfaceColorSaturation1`,bc1b4adb:`g_tSubstrateProperties1`,bc9a7305:`g_vSubstrateGrimeMinMax1`,bca7064d:`TextureSubstrateAlbedo1`,bcd74e18:`g_tSurfaceProperties1`,bd2186ed:`g_fDamageBevelMetalness4`,bd39f490:`g_fDetailBlackPointCompensation3`,bd673dbf:`g_fBurnishingCloth4`,bd89c3ca:`g_fDamageSaturation1`,bdd85c9a:`g_fGrimeBrightness4`,bdfdc646:`g_fDamageBevelAnisotropy1`,be26eec0:`g_fGrungeTexCoordOffset`,bee28209:`TextureSurfaceClothMask3`,bf0c747e:`g_tSurface`,c1264ec8:`g_fGrimeUvScale3`,c37d1086:`TextureSubstrateRoughness1`,c3bb59d9:`g_fPatternMetalness`,c41f976f:`g_fSurfaceColorBrightness2`,c4df077d:`g_vDamageTexCoordXform0`,c4ecfe0c:`TextureDamageNormal2`,c5825637:`TextureSubstrateHeight1`,c678789c:`g_vColorTint5`,c682893d:`g_fGrimeRoughnessBrightness3`,c7270a86:`TextureSurfaceMetalness1`,c74ece12:`g_mSubstrateBurnishingColorAdjust4`,c7bcce6d:`g_fCurvaturePower2`,c7dd03af:`g_bFlipFixup`,c8efe91d:`g_tDamage3`,c9c41f20:`g_fWearBleaching4`,ca355304:`g_fDamageBevelCloth3`,caf5c9c3:`g_fDamageBrightness4`,cb19a5e7:`g_vSurfaceGrimeMinMax2`,cb3dc055:`g_fDetailAnisotropyScalar1`,cbcadbfe:`TextureDetailNormal1`,cd0b79fc:`g_vSubstrateGrimeMinMax3`,cd64bd67:`g_fSubstrateColorBrightness1`,cd7c3fea:`TextureSurfaceTintMask4`,cf2b4166:`g_vPatternTexCoordCenter`,cf57729b:`TextureSurfaceHeight2`,cf578a07:`g_fDamageBevelColorSaturation1`,cf748774:`g_fDamageBevelMetalness2`,d0514087:`g_vId7Color`,d06b33a4:`TextureDamageHeight3`,d0b670e8:`g_vDamageLevels1`,d0cb68f1:`g_tObjectProperties`,d0cf1173:`g_fDetailScale3`,d204c8a9:`g_fDamageBevelColorContrast2`,d26b4fcb:`g_tDamageNormal4`,d3258453:`g_fBurnishingCloth3`,d436c1ef:`TextureSubstrateAmbientOcclusion3`,d496598f:`g_tSubstrate3`,d4cbd9f6:`TextureSubstrateRoughness3`,d5565f6d:`g_tSurfaceProperties2`,d5c78882:`g_vDamageBevelColorTint4`,d6239656:`g_fSubstrateColorBrightness2`,d72fcd90:`TextureNoise`,d7599c64:`g_fDamageUvScale1`,d75bd55a:`TextureSubstrateMetalness4`,d78c8b3b:`g_vUvScale1`,d7d8b45d:`g_vPatternTexCoordScale`,d7fc2775:`TexturePattern`,d87505e4:`g_fDamageBleaching1`,d8fe59a7:`g_fSubstrateBurnishingRoughnessBrightness4`,d90d1e00:`g_vDamageMinMax1`,d9135a7d:`g_vDamageBevelColorTint1`,d921a71b:`g_fDamageBevelColorContrast3`,d9303e6d:`TextureLayerMask`,d95611e8:`TextureSubstrateClothMask4`,da08e4f2:`g_fSurfaceColorContrast1`,db32c688:`g_vUvOffset3`,db5ab75e:`g_mSubstrateColorAdjust3`,dbbcce07:`TextureSurfaceNormal1`,dbdadc19:`g_vId8Color`,dc704a16:`g_fDamageBevelBlendSoftness4`,dc862798:`g_tSurfaceProperties4`,deb1d33e:`g_vSubstrateColorTint2`,debdd732:`TextureDamageNormal4`,def26968:`g_vSurfaceColorTint1`,df73cac3:`g_bDamageBevelUseTintMask4`,e074912f:`g_fDamageCloth3`,e0f0dc36:`g_fDamageBevelColorSaturation3`,e0ffb177:`g_bDamageBevelUseTintMask2`,e134f76d:`g_mSubstrateColorAdjust2`,e1c71b09:`g_vDamageLevels2`,e29b1e4c:`g_fDamageBevelMetalness1`,e391fb57:`g_tSubstrateProperties2`,e48e3b3a:`Filter`,e51e1daa:`g_tGrunge1`,e5508394:`g_fSurfaceColorSaturation4`,e554b343:`g_bId7Pattern`,e5ac62f0:`g_fSurfaceBurnishingRoughnessBrightness3`,e6e65dc9:`g_vColorTint6`,e94f8a05:`g_vUvScale2`,e99aaecd:`TextureSurfaceRoughness2`,ea645c4e:`g_fDamageBrightness3`,eb32fdcd:`g_fDamageBevelAnisotropy2`,eb5c57f4:`g_fGrimeSaturation2`,eb9fe267:`g_fCurvaturePower3`,ebf62d2d:`g_fGrimeTranslucency2`,ec35fb00:`g_fGrimeTranslucency4`,ecd2d5df:`g_fBurnishingGrime1`,ed38fcda:`g_fDamageRoughnessBrightness1`,ed66c07f:`g_fPatternTexCoordOffset`,ed73c6ee:`g_fDamageBevelRoughnessBrightness1`,edac9ffe:`g_vSurfaceGrimeMinMax4`,eed9ff80:`TextureSubstrateAmbientOcclusion1`,ef08acef:`g_fDetailBlackPoint3`,efa4deec:`g_fDamageBevelColorBrightness3`,efdd79ae:`g_fGrimeSaturation3`,f0397d56:`g_vSubstrateBurnishingMinMax4`,f059f4ac:`g_vGrimeTexCoordXform0`,f0a17086:`g_fSurfaceBurnishingRoughnessBrightness2`,f0f3e7c4:`g_fSubstrateColorSaturation1`,f1579fc0:`TextureGrunge4`,f20bf331:`g_mSurfaceBurnishingColorAdjust3`,f2f669f8:`g_fDetailCloth4`,f31cd031:`TextureSurfaceNormal4`,f37ddb55:`g_fBurnishingNormalScale4`,f391607c:`g_bDamageBevelBlendToSubstrate1`,f516947e:`g_mSubstrateBurnishingColorAdjust2`,f555c177:`g_fDetailCloth1`,f556465c:`g_fDetailRoughnessContrast3`,f58a7c54:`TextureGrime1`,f5e98c2f:`TextureSubstrateRoughness4`,f697471a:`g_vDamageTexCoordOffset`,f720e2ff:`g_fCurvatureWearBoost2`,f7a0ae0f:`g_globalLateBoundBindlessSet`,f8546de2:`g_fDamageBrightness2`,f89694a4:`g_vPatternTexCoordOffset`,f8e54079:`g_fWearBleaching2`,f8ec6643:`AddressW`,f901b54f:`TextureSurfaceAmbientOcclusion1`,f9e05648:`g_vColorTint2`,fa0dcd68:`g_fSurfaceColorBrightness3`,fa4861de:`g_fDamageBevelColorContrast4`,fa626e95:`g_fDamageUvScale2`,fae01750:`TextureDetailNormal4`,fb3a56f7:`g_tGrunge4`,fc83c201:`g_fSurfaceBurnishingRoughnessBrightness4`,fd571421:`TextureSubstrateTintMask1`,fd59b7aa:`g_mSurfaceBurnishingColorAdjust2`,fd65fa0b:`TextureSurfaceHeight4`,fdb8a2b8:`g_bId2Pattern`,fdd7705e:`g_mSubstrateBurnishingColorAdjust3`,ff4a8715:`g_fDetailRoughnessContrast1`,ffc7d0be:`TextureSubstrateClothMask3`};export{r as GLOVE_DEFAULTS,t as GLOVE_EXPR,i as GLOVE_HASH,e as GLOVE_VARIANTS,n as GLOVE_VS_EXPR};