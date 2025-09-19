# OrganizationUpdateMemberRolePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The new role to be applied. This can be a string or array of strings representing the roles. Eg: [\&quot;admin\&quot;, \&quot;sale\&quot;] | 
**member_id** | **str** | The member id to apply the role update to. Eg: \&quot;member-id\&quot; | 
**organization_id** | **str** | An optional organization ID which the member is a part of to apply the role update. If not provided, you must provide session headers to get the active organization. Eg: \&quot;organization-id\&quot; | [optional] 

## Example

```python
from better_auth.models.organization_update_member_role_post_request import OrganizationUpdateMemberRolePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationUpdateMemberRolePostRequest from a JSON string
organization_update_member_role_post_request_instance = OrganizationUpdateMemberRolePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationUpdateMemberRolePostRequest.to_json())

# convert the object into a dict
organization_update_member_role_post_request_dict = organization_update_member_role_post_request_instance.to_dict()
# create an instance of OrganizationUpdateMemberRolePostRequest from a dict
organization_update_member_role_post_request_from_dict = OrganizationUpdateMemberRolePostRequest.from_dict(organization_update_member_role_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


