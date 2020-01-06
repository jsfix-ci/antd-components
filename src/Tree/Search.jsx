import React from 'react';
import PropTypes from 'prop-types';
import {useL10n as l10n} from "@root/Locales";
import {Input} from "antd";
import {getParentKey, getSearchDataList} from "@root/Tree/helper";
import {emptyFn} from "@root/helper";

const AntdSearch = Input.Search;

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Search = (props) => {
    const { onChange, tree } = props;

    const onSearchChange = e => {
        const { value } = e.target;

        const expanded = getSearchDataList(tree).map(item => {
            if (item.label.indexOf(value) > -1) {
                return getParentKey(item.key, tree);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);

        onChange(expanded, value);
    };

        return (
            <AntdSearch
                style={{ marginBottom: 8 }}
                placeholder={l10n().Form.searchText}
                onChange={onSearchChange}
            />
        );
};

Search.defaultProps = {
    onChange: emptyFn,
    tree: []
};

Search.propTypes = {
    onChange: PropTypes.func,
    tree: PropTypes.arrayOf(PropTypes.object),
};
